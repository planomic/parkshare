# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## What this is

ParkShare24 (working name was "ParkMe") is a business that lets owners of private car parks (parking cellars in residential buildings, parking houses, office car parks) earn money from empty spaces. ParkShare24 supplies the license-plate (ANPR) cameras, the app, installation and operations at no cost to the owner. Drivers book and **pre-pay** for an empty space in the app and enter by license plate. Revenue is split between the tenants who rent the spaces, the property owner, and ParkShare24.

This repo currently holds only the **public marketing landing page**, aimed at car-park owners (B2B). There is no app or backend yet, but the product is essentially a mobile app.

Product docs live in `docs/`: start with `docs/product.md` (users, ground rules, build order), then `docs/flows/` (driver, tenant, owner, admin), `docs/decisions.md` and `docs/open-questions.md`. Read them before designing or building app features, and keep them updated when a decision changes.

- Domain: `parkshare24.dk` (registered at GoDaddy; DNS points at GitHub Pages)
- Hosting: GitHub Pages, static, no build step. The `CNAME` file holds the custom domain.
- GitHub repo: `planomic/parkshare` (public). Pages is on: branch `main`, `/ (root)`, custom domain `parkshare24.dk`. HTTPS is enforced.
- Original design: a Claude Design canvas (artifact "ParkMe landing page"). `index.html` was exported from it by hand; this file is now the source of truth.

## Files

- `index.html`: the entire site. One self-contained file: inline styles, Google Fonts (Archivo for headings, Inter for body), a small vanilla-JS revenue calculator at the bottom. No framework, no bundler.
- `CNAME`: custom domain for GitHub Pages. Don't delete it.
- `sales/ejere-prospekter.csv`: prospect list of car-park owners and channels (semicolon-separated, UTF-8 with BOM for Danish Excel). Organisations and roles only, no personal contact data.
- `docs/`: product docs (Markdown).
- `design/`: snapshots of the design system and app screens; live versions are claude.ai artifacts (links in `design/README.md`). `node design/update-site-screens.js` copies the four main screens and the gate drawing into `index.html`; don't hand-edit between the `<!-- screen:… -->` markers.

## Working on the page

- Copy is in **Danish** (`lang="da"`). Keep it plain and direct, aimed at property owners, boards of housing associations (boligforeninger) and facility managers.
- Look: warm off-white ground `#F3F1EC`, ink `#121417`, accent blue `#1846C8`, signal yellow `#F5C518`, muted text `#4A4F57`, hairlines `#D9D5CC`. Headings Archivo 700–800 with tight letter-spacing. No gradients, no emoji, no stock photos.
- Must work at phone width (390 px) without horizontal scroll. Touch targets ≥ 44 px. Real `<button>`, `<a href>`, `<label for>`.
- Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000.
- The calculator: inputs `#r-spaces`, `#r-hours`, `#r-occ`, `#r-vacant` (share of spaces without a regular tenant), `#r-price`; outputs `#o-*`. Formula: `spaces × empty hours/day × occupancy × hourly price × 365 / 1.25` = yearly revenue excl. VAT (prices are shown incl. VAT; the split is of revenue excl. VAT and payment fees). Split: tenants 40 %, owner 20 %, ParkShare24 40 %; for spaces without a regular tenant, owner 60 %, ParkShare24 40 %. If you change the split, change it everywhere (hero card, calculator, its footnote, the bar legend).
- Contact form posts to Formspree: `action="https://formspree.io/f/xyeeaddz"`.

## Open TODOs

- [x] Rebrand the page from "ParkMe" to "ParkShare24" (logo mark, `<title>`, nav, footer, copy).
- [x] Placeholders filled: phone 42 73 12 55; CVR 45420671, Primzahl Solutions ApS. No email shown on the page for now (add one once email hosting for parkshare24.dk exists).
- [ ] Confirm business terms stated on the page: 0 kr. investment for owners, 40/20/40 split (tenants/owner/ParkShare24), trial period with free cancellation, equipment removed at no charge, then a 1-year commitment after the trial.
- [x] Create the GitHub repo and enable Pages.
- [x] Point DNS at GitHub (done 2026-11-07 at GoDaddy).
- [x] HTTPS enforced (Let's Encrypt via GitHub Pages, 2026-11-07; renews automatically).
- [ ] Verify the domain under the GitHub profile's Pages settings (TXT record at GoDaddy).
- [ ] Design the missing app screens: checklist in `design/README.md` ("Screens to do").
- [x] "Appen" section on the landing page updated to match the canvas screens (2026-11-07). Update it again if those three screens change.
- [ ] Have a lawyer approve the "Er det lovligt?" FAQ wording before launch.

## DNS for parkshare24.dk (at the registrar)

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  planomic.github.io
```
Remove the registrar's default parking A/CNAME records on `@` and `www`.

## Business and legal context (important for any copy or product decision)

- **Danish rules on private parking (kontrolafgifter):** since 1 July 2025 a kontrolafgift on private parking must be placed on the car or handed to the driver on the spot; it may **not** be sent afterwards by post or e-Boks. So camera/ANPR systems cannot be used to issue fines after the fact. The Transport Ministry has said Motorregistret data may only be used for fines first given physically.
- Therefore ParkShare24 earns on **pre-paid bookings, not fines.** Never write copy, or design flows, that rely on mailing fines or after-the-fact charges ("efteropkrævning") to plate owners. That is a contested grey area with many complaints.
- Signage must clearly state the parking terms and the camera surveillance. Camera data falls under GDPR.
- Tenants usually may not sublet their space without the owner's consent; the owner agreement with ParkShare24 must provide that consent and adjust tenant contracts.
- Precedent used in sales copy: Copenhagen Municipality rents about 3,000 private parking spaces for residents with a resident licence (beboerlicens); about 2,400 of them are booked in the Visitors app (kk.dk, answer of 19 Feb 2026). It is a similar idea, not the same model: the municipality pays owners to rent spaces, tenants don't share their own spaces and drivers don't pay per hour. Say "Idéen er afprøvet", never "Modellen er afprøvet".
- Example numbers used on the page (assumptions, not market data): 60 spaces, 6 empty hours/day, 30 % occupancy, 20 kr./hour incl. VAT, 5 % of spaces without a regular tenant → about 631,000 kr. revenue/year excl. VAT, about 139,000 kr. to the owner, about 350 kr./month per tenant.
