# ParkShare24: product overview

ParkShare24 is a mobile app that lets drivers book and pre-pay for empty spaces in private car parks (residential parking cellars, parking houses, office car parks). ParkShare24 installs license-plate (ANPR) cameras and signs at no cost to the owner, runs the app and operations, and splits booking revenue: **tenants 40 %, owner 20 %, ParkShare24 40 %**.

## Users

| User | Who | What they need |
|---|---|---|
| **Driver** | Anyone who needs to park | Find, book and pay fast; get in without trouble |
| **Tenant** | Resident or employee who rents a space | Share the space with almost no effort; always get it back; get paid |
| **Owner** | Property owner, housing association board, facility manager | Extra income, no work, no trouble with residents |
| **Admin** | ParkShare24 staff | Set up car parks, help users, handle money and faults |

## Ground rules for every flow

1. **Pre-paid bookings only.** Since 1 July 2025 a kontrolafgift (parking fine) on private parking must be handed over on the spot; it may not be sent afterwards by post or e-Boks. ParkShare24 never earns on fines and never designs flows that charge plate owners after the fact.
2. **The tenant always gets their space back.** Bookings end before the tenant's return time with a buffer. If something goes wrong, the tenant gets another space and compensation; the driver is never moved.
3. **The owner's list of spaces and tenants is the source of truth.** A tenant can only share a space the owner has linked to them, confirmed with MitID.
4. **GDPR.** Camera data and in/out logs are personal data. Clear purpose, explicit consent where needed, short retention, clear signage about camera surveillance.
5. **Subletting needs the owner's consent.** The owner agreement gives it, and tenant contracts are adjusted.
6. **Always the cheapest in the area.** Parking with us takes a little more effort than the street or a public parking house, so our price must beat theirs for the same time.

## Flows

- [Driver](flows/driver.md)
- [Tenant](flows/tenant.md)
- [Owner](flows/owner.md)
- [Admin](flows/admin.md)

Also: [Decisions](decisions.md) · [Open questions](open-questions.md)

## Build order

1. **Pilot (one car park):** owner setup (done by admin), tenant invitation + MitID, slide-to-share, driver booking and entry with a fallback.
2. **Before scaling:** extend/cancel, overstay handling, coming-home-early guarantee, tenant earnings and payouts, automatic sharing.
3. **Later:** owner dashboard in the app (a monthly emailed report is enough at first), driver-facing website / app store pages.
