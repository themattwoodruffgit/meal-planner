/*
 * Family meal ratings — the canonical, shared layer (ships with the site).
 *
 * Shape: { "<recipe id>": { "<person>": stars (1-5), ... }, ... }
 * The app shows the average of everyone's stars (family + the device's own rating).
 *
 * Workflow: each person rates meals in the app on their own device, then uses
 * "Copy my ratings" (Recipes section) and WhatsApps the text to Matt. Merge those
 * numbers here, keyed by person, and push — the whole family then sees the averages.
 * A person's re-rating simply overwrites their previous number.
 */
window.FAMILY_RATINGS = {};
