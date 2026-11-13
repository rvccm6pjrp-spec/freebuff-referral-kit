# Provenienza delle skill

54 skill, 5 repository, tutte MIT. Nessun file è stato riscritto: sono copie dei pack
originali, con le dipendenze condivise (`references/`, `state/`, `scripts/`) accanto alle
skill. Le licenze complete sono in `LICENSES/`.

| Pack | Skill incluse | Repo | Licenza | Ultimo commit | Evidenza |
|---|---|---|---|---|---|
| Instagram | 13 di 13 | [Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill) | MIT | 2026-09-13 | ~4.736 stelle il 04/11/2026; video YouTube da 15k view il 09/11/2026 |
| YouTube | 11 di 11 | [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) | MIT | 2026-09-16 | Pack citato e testato su YouTube (ottobre 2026) |
| Publishing | 4 di 14 | [marcosmodly/marketing-skill](https://github.com/marcosmodly/marketing-skill) | MIT | 2026-11-13 | Post Reddit r/claudeskills del 09/11/2026; plugin con 12 skill marketing |
| Growth | 8 di 53 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | MIT | 2026-11-11 | ~19.1k stelle (ClaudeFast, 10/11/2026); 29° su hotskills.dev |
| Workflow | 4 di 15 | [obra/superpowers](https://github.com/obra/superpowers) | MIT | 2026-11-03 (v7.0.2) | 60.5k stelle (hotskills.dev, 11/11/2026) |
| Base | 14 | Già presenti nel progetto, `license: MIT` nei file | MIT | — | Usate nella campagna buddybank/Freebuff |

## Cosa è stato incluso

### Instagram (13)
`ig-audit`, `ig-caption`, `ig-carousel`, `ig-comment`, `ig-dm`, `ig-human`, `ig-plan`,
`ig-profile`, `ig-reel`, `ig-reply`, `ig-repurpose`, `ig-story`, `ig-viral`.

### YouTube (11)
`yt-audit`, `yt-chapters`, `yt-comment`, `yt-edit`, `yt-package`, `yt-plan`, `yt-retention`,
`yt-script`, `yt-seo`, `yt-shorts`, `yt-viral`.

### Publishing (4 di 14)
`publish-pipeline`, `community-post-generator`, `competitor-research`, `content-repurposer`.
Dipendenze copiate: `references/`, `state/`, `scripts/publish_webhook.py`,
`scripts/publish_direct.py`. Non è stato incluso il motore di rendering video (3 MB) perché
il promo è già renderizzato con Remotion.

### Growth (8 di 53)
`referrals`, `analytics`, `content-strategy`, `marketing-plan`, `community-marketing`,
`influencer-marketing`, `copy-editing`, `attribution`.

### Workflow (4 di 15)
`brainstorming`, `writing-plans`, `executing-plans`, `verification-before-completion`.

## Cosa non è stato incluso

- [aaaronmiller/create-viral-content](https://github.com/aaaronmiller/create-viral-content):
  **nessun file di licenza** nel repo. Non ridistribuito. È un'ottima lettura sulle regole
  delle piattaforme e sui tell AI nel 2026; va installata dal repo originale, a tuo rischio
  sulle condizioni d'uso.
- Le altre 45 skill di `marketingskills`, 10 di `marketing-skill`, 11 di Superpowers: fuori
  perimetro o troppo specialistiche per questa campagna.

## Fonti della selezione

- Reddit r/claude: "Best Claude Skills I use in 2026".
- Reddit r/ClaudeCode: "Which skills are you using frequently?".
- Reddit r/claudeskills: plugin marketing con publishing, 09/11/2026.
- Reddit r/ClaudeDesign: skill per social media.
- YouTube: "13 Claude Code Instagram Agent Skills" (09/11/2026); "I Ranked the 10 Most-Starred
  Claude Skills on GitHub" (21/06/2026); "I Tested the Claude YouTube Agent Skill"
  (23/10/2026).
- hotskills.dev, leaderboard Claude Code, aggiornato 11/11/2026.
- ClaudeFast, "Claude Code Marketing Skills: 8 Repos, 1 Winner", 10/11/2026.

## Licenze

Le licenze complete sono in `LICENSES/`:

- `instagram-agent-skill-LICENSE` — MIT, Copyright (c) 2026 Jake Schincariol
- `youtube-agent-skill-LICENSE` — MIT, Copyright (c) 2026 Jake Schincariol
- `marketing-skill-LICENSE` — MIT, Copyright (c) 2026 marcosmodly
- `marketingskills-LICENSE` — MIT, Copyright (c) 2025 Corey Haines
- `superpowers-LICENSE` — MIT, Copyright (c) 2025 Jesse Vincent

Se ridistribuisci il kit, tieni queste licenze e questo file insieme alle skill.
