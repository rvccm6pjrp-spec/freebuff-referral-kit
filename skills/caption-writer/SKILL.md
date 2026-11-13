---
name: caption-writer
description: >-
  Use to write the caption that ships with a post: Instagram, TikTok, YouTube Shorts,
  LinkedIn or X. Run when the user says "write the caption," "copy for this video,"
  "description," "testo del post," or has a video/image and needs the text around it.
  Reads brand-profile and the asset first. Writes the hook line, the body, one CTA and
  the referral disclosure; adapts length and mechanics to the platform instead of
  copy-pasting. For the opening line alone use hook-writer; for the video script use
  reels-script or tiktok-script; for the link placement use link-in-bio-and-traffic.
metadata:
  version: 1.0.0
license: MIT
---

# Caption Writer

The caption is not a description of the video. It is the second hook, the context, and the
instruction. Most people read it only after the first two seconds, so it must work for
someone who has already stopped — not repeat what the video just said.

## Inputs to collect

1. **Asset**: what the video/image actually shows. Watch it or read the frames. Never write
   from the title alone.
2. **Platform**: one caption per platform. A caption written for LinkedIn and pasted into
   TikTok reads like an ad.
3. **Objective**: reach, saves, clicks, or replies. Pick one.
4. **CTA**: what the viewer does next. For this campaign: `Link in bio`, not a raw URL.
5. **Disclosure**: referral/commercial relationship. Always present, even when the link is
   in bio.

## Structure

1. **Hook line** — the strongest true claim, number, or tension in the asset. No greeting,
   no "in questo video".
2. **Context** — one or two lines that make the hook make sense.
3. **Value** — the concrete detail: price, time saved, command, before/after.
4. **CTA** — one action. `Link in bio.` / `Salvalo per dopo.` / `Dimmi se lo usi.`
5. **Disclosure** — `ADV: link referral in bio. Se lo usi ricevo sessioni extra.`
6. **Hashtags** — 3–5 specific ones, not 30 generic ones.

## Platform mechanics

| Platform | Length | Links | Notes |
|---|---|---|---|
| Instagram | 125 chars visible, 800–1,500 total | Bio only | First line must survive the truncation; line breaks every 1–2 sentences |
| TikTok | 100–300 chars | Bio only | Put the search keyword in the first line; comments with links are spam |
| YouTube Shorts | Title 40–60 chars, description 1–3 lines | Channel links only | URLs in description/comments are not clickable on Shorts |
| LinkedIn | 900–1,300 chars | In post or first comment | Short paragraphs; no engagement-bait |
| X | 280 chars | In post | One idea; link in a follow-up post if reach matters |

## Referral rules

- Never write "guadagna", "entrate extra", "premio garantito" or a countdown that is not real.
- The disclosure is not a hashtag hidden at the end. Put it on its own line before the
  hashtags, in plain language.
- If the post says "gratis", verify the current offer. If it says a price, verify it the day
  of publication.
- Do not put the raw referral URL in a TikTok/Instagram caption: it is not clickable and it
  looks like spam.

## Output

Always deliver:

1. **Three variants**: direct, story, contrarian. Each with its own first line.
2. **The recommended one**, with a one-sentence reason.
3. **Hashtags** and **disclosure** separated, ready to paste.
4. **Alt text** for the cover image, if there is one.

## Anti-slop checklist

- No "Non è X, è Y."
- No "Non serve X. Non serve Y. Non serve Z."
- No em-dash chains or "In un mondo in cui...".
- No fake questions ("Ti sei mai chiesto...?").
- No "Link in bio" three times in the same caption.
- Read it aloud: if it sounds like a press release, rewrite the first line.

## Handoff

- Hook variants: `hook-writer`.
- Video script: `reels-script`, `tiktok-script` or the script in `freebuff-export/01-scripts`.
- Where to place the link: `link-in-bio-and-traffic` and `freebuff-export/07-distribuzione/REGOLE-LINK.md`.
- Scheduling: `content-calendar`.
