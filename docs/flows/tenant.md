# Tenant flows

Getting tenants to release their spaces is the hardest part of the business. Every tenant flow should take seconds and show what they earn.

## T1. Accept invitation and confirm identity (pilot)
Starts when the owner links the tenant to a space (owner flow O2).
1. Tenant gets an SMS/email: "Du har plads 47 i Kælder B. Bekræft at det er dig."
2. **Log in with MitID** (via a certified broker, see decisions). The name from MitID is matched against the name the owner entered.
   - Match: tenant is linked to the space.
   - No match (e.g. partner holds the lease): sent to the owner to approve.
3. Add the license plate(s) of the car(s) that use the space. The plate is linked to the **space**, not the person.
4. Add a bank account for payouts.
5. Accept terms: the subletting consent from the owner agreement, and consent to logging when the car drives in and out (used only to trigger sharing).

## T2. Slide to share when driving out (pilot, main way to share)
1. The exit camera reads the tenant's plate as the car leaves.
2. Push notification: "Din plads er ledig. Del den, mens du er væk?"
3. One question: "Hvornår er du tilbage?" Quick choices: *kl. 17*, *i aften*, *i morgen tidlig*, *vælg tid*. The tenant's usual return time is preselected.
4. **Slide to share.** The space is bookable until 30 min before the return time.
5. Confirmation: "Delt til kl. 16.30. Du tjener ca. 15 kr." (Example: out at 8.12, back at 17 → 8.3 hours × 16 kr. (20 kr. excl. VAT) × 30 % occupancy × 40 % share.)

Rules:
- Skip the notification for short trips (if the tenant usually returns within about an hour).
- Tenants can turn notifications off or limit them to weekdays.
- Only the plate(s) linked to the space trigger it. A household's second car does not.

## T3. Automatic sharing
After a few weeks of pattern data: "Du kører ud kl. 8 og kommer hjem kl. 17 på hverdage. Del automatisk?"
- If on, driving out shares the space automatically. The notification only confirms: "Delt til 16.30 · Fortryd".
- Tenants can also set a fixed schedule ("hverdage 8–17") or share a one-off period ("I'm away this weekend") without driving out.

## T4. Coming home early
The tenant must always get a space.
1. Bookings end at the buffer time, so normally the space is free.
2. If the tenant arrives while their space is booked: the app points them to another free space in the same car park and pays a small compensation.
3. The driver is never moved.
4. If no space is free at all: to decide (see open questions).

## T6. Invite a guest ("Inviter gæst")
Works in both car park modes; in "Kun lejere og gæster" it is the only way outsiders get in.
1. Tenant taps "Inviter gæst" and picks day and time (e.g. Saturday 14.00–22.00).
2. Enters the guest's license plate, or sends the guest a link by SMS so the guest enters it. The guest needs no app.
3. The app finds a free space in the same car park (a space another tenant has shared, or one without a tenant) and shows the price.
4. The tenant pays in the app, or pays with their sharing earnings ("Betal med din indtjening").
5. The guest gets an SMS with address, time, space number and "Kør ind på din nummerplade". The camera opens only for that plate during the booking.
6. Usual rules: the space owner's 30-minute buffer, a reminder before the end, support if the gate does not open. The tenant is responsible for their guest.

## T5. Earnings and payouts
- "Du har tjent 350 kr. denne måned." (Matches the landing page example: about 350 kr. per tenant per month at 20 kr./hour incl. VAT.)
- History per booking. Monthly payout to the tenant's bank account.
- When the tenant moves out (owner flow O4), outstanding earnings are paid out.
