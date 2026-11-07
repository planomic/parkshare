# Design

Snapshots of the ParkShare24 design work. The live, editable versions are artifacts on claude.ai (private to the owner's account):

- Design system: https://claude.ai/artifact/NdjSg6grSwBs3AtAV2424k
- App screens (canvas): https://claude.ai/artifact/B8451zgweGrvf7uTsTPwzC

The artifacts are the source of truth. After changing one, copy its files here and commit, so git keeps the history.

## `system/`: the design system

- `README.md`: the style guide (voice, colour, type, spacing, shape, iconography).
- `tokens.json`: colours (light and dark), type styles, spacing and radii. Values come from the landing page (`index.html`).
- `components/`: Button and TextField (guidelines and preview), plus the cover.
- `assets/Logos/parkshare24-mark.svg`: the "P" logo mark.
- `design-system.json`: the artifact's index file.

## `app/`: the app canvas

- `Main.dc.html`: tenant screen "Del din plads" (slide to share after driving out), 390 × 844. Open it on the canvas to try it; the file alone needs the canvas runtime to render.
- `canvas.json`: the canvas layout.
