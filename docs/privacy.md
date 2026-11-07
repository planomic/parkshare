# Privacy and cameras

How ParkShare24 handles camera surveillance and license plates legally. This is our working understanding, **not legal advice**: everything marked "lawyer" in [open questions](open-questions.md) must be approved before launch.

A license plate is personal data (it can be traced to a person), so both **GDPR** and the Danish **tv-overvågningslov** (Act on camera surveillance) apply.

## Rules we follow

1. **Film only the gate.** Cameras are angled and zoomed so they see cars in the entrance and exit lanes, not the street, the pavement, neighbours or the rest of the car park.
2. **Signs at every entrance.** Clear signs say the area is under camera surveillance, who is responsible and where to read more (see the sign text below).
3. **A legal basis for each purpose:**
   - Opening the gate for drivers with a booking and for tenants: needed to deliver the service they signed up for (GDPR art. 6(1)(b)), or our legitimate interest in access control (art. 6(1)(f)).
   - Logging when a tenant's car drives in and out, used only to ask "Del din plads?": **consent** (art. 6(1)(a)), the checkbox in tenant sign-up. Tenants can withdraw it in the app; sharing then works by schedule only.
   - Bookkeeping for bookings and payouts: legal obligation (art. 6(1)(c)).
4. **Store as little as possible, for as short as possible:**
   - No continuous video recording. The gateway keeps a plate event (plate, time, gate) and, for support, one still image.
   - Camera images are deleted within 30 days at the latest (the general rule for camera surveillance), sooner if possible.
   - Plate events are kept only as long as needed for billing, complaints and payouts. Exact periods: see open questions.
5. **The owner cannot see movements.** The owner page shows spaces, tenants and money, never when a tenant drives in or out.
6. **Never for fines.** Camera data is not used to send fines or charges afterwards (see `decisions.md`).
7. **Security:**
   - Cameras and the relay are never reachable from the internet; only the gateway, over an encrypted outbound connection.
   - Support can see camera images only when handling a case, and every lookup and every remote gate opening is logged (who, when, why).
   - Data at rest is encrypted; access uses personal logins with two-factor authentication.
8. **People's rights.** Anyone can ask what we store about them, have it corrected or deleted, or object. Requests go through support (42 73 12 55) or the privacy page and are answered within one month.
9. **Workplace car parks.** Where the car park belongs to an employer, employees must be told about the cameras under the rules on monitoring employees. The owner agreement must say who tells them.

## Roles

| Who | Role | Paperwork |
|---|---|---|
| ParkShare24 (Primzahl Solutions ApS, CVR 45420671) | Data controller for bookings, app accounts, cameras and plate events | Privacy policy, records of processing (art. 30), DPIA |
| Property owner | Owns the car park; gives us the tenant list | Owner agreement states the roles; possibly joint controller for the tenant list (lawyer) |
| Suppliers: cloud hosting, SMS, payment, MitID broker | Data processors (except where they act as their own controller, e.g. MobilePay) | A data processing agreement (databehandleraftale) with each |

## Sign text

Short version at the entrance (Danish):

> **Tv-overvågning**
> Indkørslen er videoovervåget. Kameraet læser nummerplader for at åbne porten for bilister med en booking og for lejere.
> Ansvarlig: ParkShare24 (Primzahl Solutions ApS), CVR 45420671.
> Læs mere og se dine rettigheder: parkshare24.dk/privatliv · 42 73 12 55
> [QR code to parkshare24.dk/privatliv]

The full privacy page (`/privatliv`, not built yet) covers: who we are, what we collect, why and on what legal basis, how long we keep it, who receives it, people's rights, and the right to complain to Datatilsynet.

## Before launch

- [ ] DPIA (konsekvensanalyse) for camera surveillance with plate reading.
- [ ] Privacy page `/privatliv` on the website and in the app.
- [ ] Records of processing (art. 30).
- [ ] Data processing agreements with every supplier.
- [ ] Roles written into the owner agreement.
- [ ] Signs ordered and placed at every entrance.
- [ ] Camera angles checked on site (only the lanes).
