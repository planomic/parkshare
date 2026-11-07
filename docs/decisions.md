# Decisions

Newest first. Write down what was decided and why, so it is not reopened by accident.

## 2026-11-07

- **Prices are shown incl. VAT; the split is of revenue excl. VAT and payment fees.** Danish consumer prices must include VAT, and parking rental is normally VAT-liable (accountant to confirm). Of 20 kr./hour, 16 kr. is shared. All examples on the page, the screens and in the docs use this.
- **Spaces without a regular tenant: owner 60 %, ParkShare24 40 %.** Vacant and guest spaces have no tenant to receive the 40 % tenant share, so it goes to the owner. A strong argument for boards, at no cost to ParkShare24.
- **Owner terms: trial period with free cancellation, then a 1-year commitment.** If the owner isn't satisfied during the trial, we remove the equipment at no charge. Length of the trial still to decide.
- **Tenants decide when their own space is shared.** The owner only chooses time windows for spaces without a regular tenant.
- **No "open gate" button in the app.** Only the plate camera opens the gate. If it fails, the driver calls support, who check the booking and open it remotely. A button would let anyone with the app (or a shared login) open the gate.
- **Revenue split: tenants 40 %, owner 20 %, ParkShare24 40 %** (was 40/30/30). Tenants' share stays highest because they must release their spaces for the business to work. ParkShare24 carries the cameras, installation, app and operations. Owner example on the landing page drops to about 197,000 kr./year.
- **Price is always the cheapest in the area.** Drivers make a little more effort to park in a private cellar (finding the entrance, booking ahead), so the price must beat nearby street parking and parking houses for the same time. Pricing is set by ParkShare24 from local prices, not freely by the owner. The calculator's 20 kr./hour is an example and must be checked against each area.
- **Earn on pre-paid bookings, never on fines.** Danish rules since 1 July 2025 forbid sending kontrolafgifter afterwards. After-the-fact charging is a contested grey area with many complaints.
- **Main way to share is "slide to share" when the tenant drives out.** Asking at the moment the space becomes empty turns sharing into a one-swipe habit. Scheduling ahead is secondary. Automatic sharing comes later for regular patterns.
- **One buffer: bookings end 30 minutes before the tenant's return time.** Protects the guarantee that the tenant always gets their space back. What drivers see as "Ledig til" is that time; there is no second margin on top.
- **If a tenant comes home early, the tenant moves, not the driver.** The driver paid for a guaranteed space; the tenant gets another space and compensation.
- **The owner's list of spaces and tenants is the source of truth.** Tenants confirm identity with MitID, matched against that list. Mismatches go to the owner.
- **MitID via a certified broker** (Signicat, Criipto or Nets/Nexi; not chosen yet). Direct MitID integration isn't available to us. Needed once per tenant.
- **Owners sign with MitID Erhverv,** so the subletting consent is binding.
- **License plates are linked to the space, not the person.** So a household's second car doesn't trigger sharing.
- **Product docs live in this repo under `docs/`.** Next to the code and versioned. Shared Claude Docs can be made for outside review, with the repo as the master version.
