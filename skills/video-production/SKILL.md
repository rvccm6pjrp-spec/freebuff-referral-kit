---
name: video-production
description: >-
  Use to turn a script into a publishable vertical video: screen recording, b-roll,
  captions, music, safe zones and export settings. Run when the user says "how do I shoot
  this," "edit this," "CapCut," "export settings," "safe zone," "make it vertical," "add
  captions," or has a script and needs the production steps. Covers faceless formats and
  the Remotion promo. For the script itself use reels-script or tiktok-script; for the
  caption use caption-writer.
metadata:
  version: 1.0.0
license: MIT
---

# Video Production

The kit is designed to be shot without a face and without a studio. Screen, hands, terminal,
text. The constraint is an advantage: it forces the idea to be visual.

## Two paths

1. **Use the ready promo** — `freebuff-export/remotion/out/promo/FREEBUFF-promo-v01.mp4`.
   26 seconds, 1080×1920, no audio. Add music and publish.
2. **Shoot one of the 8 scripts** — `freebuff-export/01-scripts/`. Each has a shot list and
   timecodes.

## Recording

- **Format:** 1080×1920, 30 fps. If you record 16:9, keep the action in the central vertical
  third; you will crop later.
- **Screen:** clean desktop, no personal files, no notifications, browser zoom 110–125%.
  Close Slack, mail, password managers. Use a demo repo, never a client repo.
- **Hands:** overhead or desk angle, soft window light, no face. Keep the same framing across
  a series.
- **Audio:** record voice separately if possible. A phone headset beats laptop mic. Room with
  soft furnishings, no fan, no echo.
- **Takes:** record the full action twice. The first is for safety, the second is usually
  smoother.

## Edit

- **First frame is the hook.** No logo, no intro, no "ciao".
- **Cut dead air.** Every 1.5–2 seconds something should change: cut, zoom, text, number.
- **Captions burned in.** Two lines max, 42–56 px, high contrast, bottom-safe area.
- **Safe zones:** keep text at least 120 px from the top and 320 px from the bottom (TikTok
  and Reels UI). Do not put the CTA under the caption or the progress bar.
- **Music:** instrumental, 95–110 BPM, 10–15% under the voice. If there is no voice, 20–25%.
  Duck under speech.
- **Sound design:** one tick per receipt line, one thud on the stamp, silence before the CTA.

## Export

| Parameter | Value |
|---|---|
| Resolution | 1080×1920 |
| Frame rate | 30 fps |
| Codec | H.264, High profile |
| Bitrate | 8–12 Mbps |
| Audio | AAC 192 kbps, 48 kHz |
| Loudness | −14 LUFS integrated, true peak −1 dB |
| Container | MP4 |

Export a **clean master** without captions and a **publish version** with captions burned in.
Keep the master: platform captions change, the master does not.

## Remotion (promo)

```bash
cd freebuff-export/remotion
npm install
npm run render:promo
```

On a minimal Linux box, Chrome may need system libraries:

```bash
LD_LIBRARY_PATH=/tmp/chromium-libs/usr/lib/x86_64-linux-gnu:/tmp/chromium-libs/lib/x86_64-linux-gnu npm run render:promo
```

Output: `out/promo/FREEBUFF-promo-v01.mp4`. Stills: `npm run still`.

## QA before publishing

- [ ] Watch it muted: does it still make sense?
- [ ] First 2 seconds show the promise.
- [ ] Text inside safe zones on a phone, not just the preview.
- [ ] No personal data, tokens, emails or client names in frame.
- [ ] Audio not clipping; voice louder than music.
- [ ] CTA and `ADV` disclosure visible.
- [ ] File under 100 MB and plays on the platform preview before scheduling.

## Output

A publish-ready MP4, a clean master, the caption file, and a one-line note on what to improve
in the next take. Do not publish a video you have not watched muted.
