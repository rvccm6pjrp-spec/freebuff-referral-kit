# Skill della campagna — 54 skill reali

Nessuna di queste skill è stata scritta da me. Sono 54 skill esistenti, installate da 5
repository pubblici con licenza MIT. Le 5 che avevo scritto per questa campagna sono state
rimosse: non erano skill esistenti.

Provenienza, commit, licenze e motivazioni: [THIRD-PARTY.md](THIRD-PARTY.md).

## Come installarle

```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

Nel repo la cartella `skills/` è già pronta. Se lavori in un altro progetto, copiala in
`.agents/skills/`. Le dipendenze condivise (`references/`, `state/`, `scripts/`, `LICENSES/`)
sono incluse: non vanno spostate.

## Base — 14 skill

Strategia, voce, copy, formati. Erano già nel progetto, sono MIT e restano la base.

`brand-profile`, `voice-builder`, `copywriting`, `offers`, `launch`, `social`, `hook-writer`,
`carousel-writer`, `reels-script`, `tiktok-script`, `cross-platform-repurposing`,
`content-calendar`, `social-seo`, `link-in-bio-and-traffic`.

## Instagram — 13 skill

Pack `instagram-agent-skill` di Jake Schincariol. Include script veri: `hookscore.py`,
`caption.py`, `beats.py`, `humanize.py`, `detect.py`, `swipe.py`.

| Skill | Cosa fa |
|---|---|
| `ig-reel` | Reel da un'idea: 26 formule di hook, script, testo a schermo, beat sheet |
| `ig-caption` | Caption con lint dei primi 125 caratteri, keyword e 3 hashtag |
| `ig-audit` | Post-mortem: outlier multiple, hold a 3s, send per reach |
| `ig-viral` | Trova i Reel che funzionano nel niche e li ranka per outlier multiple |
| `ig-profile` | Vota il profilo su 100 e riscrive ciò che perde punti |
| `ig-plan` | Piano settimanale di pubblicazione |
| `ig-carousel` | Caroselli |
| `ig-story` | Storie |
| `ig-repurpose` | Un video/newsletter in una settimana di contenuti |
| `ig-comment` | Commenti sotto post altrui, senza spam |
| `ig-reply` | Risposte ai commenti |
| `ig-dm` | Messaggi in entrata, collab, follow-up |
| `ig-human` | Toglie il fingerprint AI: em dash, parole slop, caratteri invisibili |

## YouTube — 11 skill

Pack `youtube-agent-skill` di Jake Schincariol. Stessi tool di scoring, adattati a YouTube.

`yt-script`, `yt-package`, `yt-audit`, `yt-retention`, `yt-edit`, `yt-shorts`, `yt-seo`,
`yt-viral`, `yt-plan`, `yt-comment`, `yt-chapters`.

I punti di forza: script con 21 formule di hook, title+thumbnail come una coppia, retention
export letto al secondo, Shorts estratti da un video lungo.

## Publishing e produzione — 4 skill

Dal plugin `marketing-skill` di marcosmodly.

| Skill | Cosa fa |
|---|---|
| `publish-pipeline` | Pubblica solo dopo approvazione: webhook n8n/Make o API della piattaforma, mostrando il payload esatto |
| `community-post-generator` | Post per Reddit, Hacker News e community, con regole del subreddit |
| `competitor-research` | Ricerca competitor e angoli |
| `content-repurposer` | Un contenuto in più formati |

`publish-pipeline` non pubblica da sola: richiede webhook o credenziali impostate da te e un
"yes" esplicito sul payload. Le dipendenze condivise sono in `references/`, `state/` e
`scripts/` dentro questa cartella.

## Growth — 8 skill

Da `coreyhaines31/marketingskills` (19,1k stelle).

`referrals`, `analytics`, `content-strategy`, `marketing-plan`, `community-marketing`,
`influencer-marketing`, `copy-editing`, `attribution`.

`referrals` è la più direttamente utile: programmi refer-a-friend, incentivi, loop, payout.
`analytics` copre tracking plan, UTM, GA4 e metriche calcolate bene.

## Workflow — 4 skill

Da `obra/superpowers` (60,5k stelle).

- `brainstorming` — capire cosa costruire prima di costruirlo.
- `writing-plans` — piano a task piccoli e verificabili.
- `executing-plans` — esecuzione del piano.
- `verification-before-completion` — niente "fatto" senza una verifica.

Sono le uniche quattro di Superpowers che servono a una campagna di contenuti; le altre 11
sono sviluppo software puro.

## Cosa non è incluso

- `aaaronmiller/create-viral-content`: non ha una licenza, quindi non posso ridistribuirla.
  La linko in `THIRD-PARTY.md` come lettura consigliata.
- Le 53 skill di `marketingskills`, le 14 di `marketing-skill` e le 15 di Superpowers: ho
  preso solo quelle che servono. Il resto è rumore per questa campagna.
- Paid ads, SEO web, sales/CRM: fuori perimetro.

## Regola

Una skill non è una verità. Se il suo consiglio contraddice i dati della tua pagina, vince il
dato. Se contraddice le regole della piattaforma, vincono le regole.
