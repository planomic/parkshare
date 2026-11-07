# Hardware: example set per car park

Best value for money, built from consumer and prosumer devices. One car park with one gate (one lane in, one lane out). Prices are rough Danish retail prices including VAT, checked 2026-11-07; check before buying.

## The set

| # | Part | Example | Approx. price | Why this one |
|---|---|---|---|---|
| 2 | Cameras, entrance and exit | Reolink RLC-811A (4K, 5× optical zoom, PoE, IR) | 2 × ca. 1.170 kr. | Zoom lets you frame just the plate at the gate; standard RTSP stream; PoE = one cable |
| 1 | Small on-site computer (gateway) | Intel N100 mini PC, 16 GB RAM, 500 GB SSD (e.g. Beelink Mini S12 Pro or EQ12) | ca. 1.500–3.000 kr. | Runs plate recognition locally, low power, enough for 2 cameras |
| 1 | Relay for the gate | Shelly 1 Gen3 (potential-free relay, local HTTP API) | ca. 95 kr. | Gives the gate controller the same "open" pulse as a push button |
| 1 | 4G/5G router with our own SIM | Teltonika RUT241 | ca. 1.200–1.500 kr. | Own internet independent of the building; remote management; very stable. Cheaper consumer alternative: TP-Link 4G router (ca. 600–900 kr.) |
| 1 | PoE switch | TP-Link 5-port with 4 PoE ports (e.g. TL-SG1005P) | ca. 300–400 kr. | Network and power to the cameras |
| 1 | UPS (backup battery) | APC Back-UPS 750 VA (BX750MI) | ca. 900–1.100 kr. | Keeps gateway, router and cameras running through short power cuts |
| 1 | Lockable cabinet + cables, mounts | IP65 wall cabinet, outdoor-rated network cable, camera mounts | ca. 800–1.200 kr. | Keeps the gear safe from tampering and damp |
| 2–4 | Signs | Parking terms + camera surveillance (GDPR) | ca. 500–1.000 kr. | Required by law |

**Hardware total: about 8.000–10.500 kr. per car park**, plus a SIM plan (ca. 100 kr./month) and installation.

The gate or barrier itself is usually already there and is not included.

## How it fits together

```
Entrance camera ─┐                     ┌─> Shelly relay ──> gate controller "open" input (pulse)
Exit camera ─────┤ PoE switch ─ Gateway ┤
                 │  (RTSP video)  (mini PC)
                 │                     └─> 4G router ──> encrypted outbound connection ──> ParkShare24 server
```

1. The cameras stream video to the gateway. Nothing is reachable from the internet.
2. On the gateway, **Frigate** (free, open source) reads license plates (its license plate recognition, available since version 0.16).
3. A small ParkShare24 service on the gateway compares each plate with the **local allowlist** (who has a booking or a space right now). On a match it tells the Shelly relay to pulse the gate open. This works even if the internet is down.
4. The gateway keeps an **outbound, encrypted connection** to our server (e.g. MQTT over TLS or WireGuard VPN). Over it, the server updates the allowlist when bookings change, and the gateway sends plate events: "tenant's car drove out" triggers slide to share, "driver drove in" starts the arrival screen.
5. **Remote opening by support** goes server → gateway → relay, and every opening is logged with who, when and which booking. The app has no open-gate button (see `decisions.md`).

## Points to check

- **Electrician.** Connecting anything to 230 V (power for the relay, UPS, cabinet) must be done by an authorised electrician (autoriseret elinstallatør). Wiring the relay's dry contact to the gate's low-voltage "open" input is simple, but follow the gate manufacturer's manual.
- **Plate reading quality.** Consumer cameras with Frigate are cheap but less proven than dedicated ANPR cameras. Test at the pilot site, day and night, with dirty plates and at real entry speed. Fallback upgrade: dedicated ANPR cameras (e.g. Hikvision or Dahua ANPR models, a few thousand kr. each) that read plates themselves and can drive the relay directly.
- **Camera placement.** Plate about 3–5 m from the camera, low angle, car moving slowly (the gate slows it down anyway). Frigate needs the plate clearly visible; it does not read parked, stationary cars.
- **GDPR.** Turn off continuous video recording. Keep only plate events and short clips for support, with a short retention period (to decide with the lawyer, see `open-questions.md`). Signs must say the area is under camera surveillance and who is responsible.
- **Exit.** Many car parks open the exit automatically (ground loop). We still need the exit camera, because the tenant's car driving out is what triggers "slide to share".
- **Relay power.** The Shelly 1 Gen3 runs on 230 V AC or 12–24 V DC; many gate controllers have a 24 V output that can power it. It connects over Wi-Fi to the router; a wired alternative is Shelly Pro 1 (DIN rail, Ethernet).
- **Shelly cloud off.** Use only the Shelly's local API from the gateway, so the relay can't be reached from outside.
