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
- `Driver.dc.html`: driver screen "Book plads" (tap Fra/Til to pick times with the phone's own time picker, latest 16.30, pay, then how to get in; if the gate does not open, call support), 390 × 844.
- `Arrived.dc.html`: driver screen "Kørt ind" (welcome, Kælder B, plads 47 marked, booked until, extend +30 min/+1 t/+2 t up to 16.30, call support if the gate does not open), 390 × 844.
- `Signup.dc.html`: tenant sign-up (invitation for plads 47, MitID check (simulated), license plate, payout account, consent to terms and camera logging, done), 390 × 844.
- `Owner.dc.html`: owner web page "Pladser og lejere" (summary, filter by status, invite / resend / approve MitID mismatch, add tenant, import list), 1280 wide, works at phone width.
- `canvas.json`: the canvas layout.

## Updating the website's app screens

The "Appen" section of `index.html` shows `Main`, `Driver` and `Arrived` exactly as on the canvas, in their starting state.

1. Copy the latest canvas files into `design/app/` (the artifact is the source of truth).
2. Run `node design/update-site-screens.js` from the repo root. It renders each screen and replaces it between the `<!-- screen:Name -->` markers in `index.html`.
3. Check the page (`python3 -m http.server 8000`), then commit.

## Screens to do

Done: tenant slide to share (`Main`), driver booking (`Driver`), driver arrived (`Arrived`), tenant sign-up (`Signup`), owner spaces and tenants (`Owner`).

### Pilot
- [ ] Driver: find a car park (search or map, free spaces and price per car park).
- [ ] Driver: sign-up (phone number with SMS code, license plate, MobilePay, terms incl. camera notice).
- [ ] Tenant: push notification on the lock screen ("Din plads er ledig. Del den, mens du er væk?") that opens slide to share.
- [ ] Support: admin screen (look up plate or booking, see camera image, open the gate remotely, log who opened it).

### Before scaling
- [ ] Tenant: coming home early (space still booked: "Plads 52 er klar til dig" plus compensation).
- [ ] Tenant: earnings and payouts (this month, history per booking, payout dates).
- [ ] Driver: reminder 15 min before the end with one-tap extend; overstay handling (waits on the lawyer, see `docs/open-questions.md`).
- [ ] Driver: my bookings and receipts (upcoming, past, cancel).
- [ ] Tenant: automatic sharing and schedules ("Del automatisk på hverdage 8–17?", share a day ahead).

### Owner and onboarding
- [ ] Invitation message: SMS and email text, and a letter with QR code and short code for tenants without phone or email on file.
- [ ] Owner: "Overblik" tab (monthly overview) and "Udbetalinger" tab (payouts). A monthly email report is enough for the pilot.
- [ ] Owner: import a tenant list (upload spreadsheet, check matches, then send invitations).
