ParkShare24 lets owners of private car parks earn money from empty spaces. Drivers book and pre-pay in the app and enter by license plate; tenants share their space when they drive out. The look comes from a car park itself: off-white concrete, ink, a strong blue sign, and yellow bay lines.

## Content fundamentals

- **Danish first.** All product copy is Danish. Plain, direct, short sentences. Say what happens, in the user's words: "Del din plads", not "Aktivér tilgængelighed".
- **Who we talk to.** Owners and boards on the web: "I / jeres" ("Jeres tomme p-pladser kan tjene penge."). Drivers and tenants in the app: "du / din" ("Din plads er ledig. Del den, mens du er væk?").
- **Money is concrete.** Always show the amount and the unit: "ca. 15 kr.", "20 kr./time", "ca. 126.000 kr. om året". Danish number format: `.` for thousands, `,` for decimals, `kl. 16.30` for times.
- **Never threaten.** ParkShare24 earns on pre-paid bookings, never on fines. No copy about fines, "kontrolafgift" or charging people afterwards.
- **No emoji, no exclamation marks** in product copy. Sentence case for headings and buttons.

## Visual foundations

**Colour.** `ground` is the page; `surface` lifts cards and fields off it. Text is `ink`, secondary text `muted`, fine print `subtle`. `accent` blue is the one action colour: one primary button per screen. `signal` yellow marks availability and highlights (the eyebrow bar, a highlight band, the slide-to-share moment); never set text in it, put `on-signal` text on it. The revenue split always uses `split-tenants` (yellow, 40 %), `split-owner` (blue, 20 %) and `split-parkshare` (grey, 40 %), in that order.

**Dark theme.** The landing page's dark sections are the dark theme: `ground` becomes ink, cards `surface` #1E2227, the blue lightens. On a dark `accent` fill use `on-accent` (ink), not white.

**Type.** Archivo (`display` family) at 700–800 with tight negative tracking for headings and figures; Inter (`body` family) for everything else. Inside the app the largest heading is `heading-2` (28px); `figure` is for the one big number on a screen. Display and heading-1 are web only and scale down on phones (72→40px, 48→32px).

**Spacing and layout.** Phone gutter `space-3` (16px). Cards pad `space-4` (22px) or `space-5` (28px). Layout with gap, not margins. Everything works at 390px wide with no sideways scroll.

**Shape.** `radius-md` on buttons and inputs, `radius-lg` on cards, `radius-pill` on chips and the slide-to-share track. No shadows: separate with `surface` against `ground`, or a `hairline`.

**Controls.** Touch targets at least 44px tall (buttons 48–52px). Real `<button>`, `<a href>` and `<label for>`. Focus: a 2px solid `focus` ring with 2px offset on every interactive element.

**Never.** Gradients, emoji, stock photos, drop shadows, coloured left-border cards.

## Iconography

There is no icon set yet. The only mark is the logo: a white Archivo "P" in an `accent` square with `radius-md` (see Logos). Until an icon set is chosen, use words; when one is added, pick a single outline set at 2px stroke in `ink`.
