---
name: campaign-analytics
description: >-
  Use to measure a referral or content campaign: define the funnel, track views, clicks
  and signups, keep a weekly sheet, and decide what to double down on. Run when the user
  says "how do I track this," "did it work," "analytics," "UTM," "conversion rate," "600
  users," "quanti iscritti," or wants a dashboard without paid tools. Never invents
  numbers: every metric must come from a platform insight, the link hub, or the referral
  dashboard.
metadata:
  version: 1.0.0
license: MIT
---

# Campaign Analytics

The campaign has one number that matters: **real users who tried the product**. Everything
else is a leading indicator. Track the smallest set that lets you decide what to do next
week, and leave the vanity metrics where they belong.

## The funnel

```
views → 3-second views → clicks → visits → signups → activated users
```

For each step, write down where the number comes from. If there is no source, the number
does not exist.

| Step | Source | Frequency |
|---|---|---|
| Views / 3s views | Native analytics (TikTok, IG, YouTube, X, LinkedIn) | Daily, first 48h |
| Clicks | Link hub / bio tool, or platform link insights | Daily, first 48h |
| Signups | Freebuff referral dashboard | Weekly |
| Activated | Product use, not just signup | Weekly |
| Revenue | 0 — this is a referral campaign | — |

## Tracking the referral link

The referral URL already carries `ref` and `via`. Do not remove or rewrite them.

- Put the **exact** referral URL in the bio/description. Do not use a shortener that hides
  the destination.
- If you use a link hub, point the hub button to the referral URL and keep the hub's own
  click count as your click metric.
- UTM tags are optional: add them only if the destination keeps the referral parameters.
  Test one click before rolling them out.
- Never create a second link with a different `ref`: you will split attribution and lose
  track of what worked.

## The 600 math

Use the current baseline, not hopes.

| Conversion visit → signup | Visits needed for 600 |
|---|---|
| 1% | 60,000 |
| 2% | 30,000 |
| 5% | 12,000 |
| 10% | 6,000 |

Then: `visits needed ÷ click rate = reach needed`. At a 2% click rate, 30,000 visits need
1.5M views. At 5%, 600,000 views. Put your real click rate in the sheet after week one.

## Weekly review (15 minutes)

1. Fill the week's row: posts, views, clicks, signups, activated.
2. Compute click rate and signup rate. Compare with last week, not with someone else's
   screenshot.
3. Pick **one** winner: the post with the best signups per 1,000 views, not the most likes.
4. Pick **one** loser to stop.
5. Write one sentence: "Next week I make more of X because Y."
6. Update the 600 projection with the real rates. If it no longer fits the deadline, say so
   and change the plan.

## Sheet columns

```
week, platform, post_url, published_at, views, three_sec_views, clicks, signups,
activated, spend_eur, notes, winner (y/n)
```

Keep it in `strategia/` or in a private sheet. One row per post, not per day.

## Rules

- No fabricated benchmarks. If a platform hides a metric, write `n/d`.
- No attribution claims you cannot defend. If a signup cannot be traced, count it as
  `organic/unknown`.
- Do not optimize for likes. A post with 10k likes and 3 signups lost to one with 800 views
  and 12 signups.
- Report the bad weeks. The series `0/600` is only credible if it includes the misses.

## Output

- A filled table for the period.
- Three bullet decisions: continue, stop, test.
- One updated projection with the real conversion rate.
