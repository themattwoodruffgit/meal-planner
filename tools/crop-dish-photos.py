#!/usr/bin/env python3
"""Crop dish photos out of recipe-card front photos, per agent-produced crop specs.

usage: python3 tools/crop-dish-photos.py <dir-with-crops-*.json> [--src DIR] [--out DIR]

Each crops-*.json holds {"entries": [{file, ref, rotate_cw, bbox_pct{left,top,right,bottom}}, ...]}.
Writes <out>/<ref>.jpg (max 800px wide, quality 82). Skip entries are ignored.
"""
import glob
import json
import os
import sys

from PIL import Image, ImageOps

ROTATE = {0: None, 90: Image.ROTATE_270, 180: Image.ROTATE_180, 270: Image.ROTATE_90}


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        sys.exit("usage: crop-dish-photos.py <dir-with-crops-*.json> [--src DIR] [--out DIR]")
    spec_dir = args[0]
    src = "/Users/matthewwoodruff/Downloads"
    out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "images")
    argv = sys.argv[1:]
    if "--src" in argv:
        src = argv[argv.index("--src") + 1]
    if "--out" in argv:
        out = argv[argv.index("--out") + 1]

    ok, failed, skipped = [], [], 0
    for spec_path in sorted(glob.glob(os.path.join(spec_dir, "crops-*.json"))):
        with open(spec_path) as fh:
            data = json.load(fh)
        for e in data.get("entries", []):
            if e.get("side") == "skip":
                skipped += 1
                continue
            ref, fname = e.get("ref"), e.get("file")
            try:
                img = Image.open(os.path.join(src, fname))
                img = ImageOps.exif_transpose(img)
                op = ROTATE[int(e.get("rotate_cw", 0))]
                if op is not None:
                    img = img.transpose(op)
                W, H = img.size
                b = e["bbox_pct"]
                box = (round(b["left"] * W / 100), round(b["top"] * H / 100),
                       round(b["right"] * W / 100), round(b["bottom"] * H / 100))
                w, h = box[2] - box[0], box[3] - box[1]
                if w <= 0 or h <= 0 or (w * h) / (W * H) < 0.06 or not 0.45 <= w / h <= 3.6:
                    raise ValueError(f"implausible box {box} in {W}x{H}")
                crop = img.crop(box).convert("RGB")
                if crop.width > 800:
                    crop = crop.resize((800, round(crop.height * 800 / crop.width)), Image.LANCZOS)
                dest = os.path.join(out, f"{ref}.jpg")
                crop.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
                ok.append((ref, os.path.getsize(dest) // 1024))
            except Exception as exc:  # report and continue — one bad spec shouldn't kill the run
                failed.append(f"{ref} ({fname}): {exc}")

    total_kb = sum(kb for _, kb in ok)
    print(f"wrote {len(ok)} photos ({total_kb} KB total), {skipped} skips")
    for ref, kb in sorted(ok):
        print(f"  {ref}.jpg  {kb} KB")
    if failed:
        print("FAILED:")
        for f in failed:
            print("  ! " + f)
        sys.exit(1)


if __name__ == "__main__":
    main()
