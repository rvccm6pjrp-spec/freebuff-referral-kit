# Skill della campagna

19 skill operative: 14 di base per contenuti social + 5 aggiunte per questa campagna. Sono
cartelle con un `SKILL.md` in formato agent-skill: si copiano in `.agents/skills/` e l'agente
le carica quando servono.

**Non sono "tutte le skill del mondo" e non esiste un set oggettivamente migliore.** Sono le
competenze che servono per fare questo lavoro: scrivere, girare, pubblicare, misurare e non
farsi bannare. Se il lavoro cambia, si aggiunge la skill che manca.

## Come installarle

```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

Nella copia di lavoro originale sono in `.agents/skills/`. Nel repo trovi le 5 aggiunte e il
pacchetto `freebuff-kit-text.zip` con tutte e 19.

## Le 14 di base

| Skill | Quando usarla |
|---|---|
| `brand-profile` | Prima di tutto: voce, pubblico, cosa diciamo e cosa no |
| `voice-builder` | Costruire una voce partendo da testi reali |
| `copywriting` | Copy di landing page, headline, promesse |
| `offers` | Costruire l'offerta, non solo la pagina |
| `launch` | Lanciare un prodotto o una funzionalità |
| `social` | Contenuti organici per LinkedIn, X, Instagram, TikTok |
| `hook-writer` | Prima riga, primi 3 secondi, cover |
| `carousel-writer` | Caroselli IG/LinkedIn/TikTok photo |
| `reels-script` | Script per Reels |
| `tiktok-script` | Script per TikTok |
| `cross-platform-repurposing` | Un'idea → post nativi per ogni piattaforma |
| `content-calendar` | Ritmo e calendario editoriale |
| `social-seo` | Ricerca dentro le piattaforme, keyword |
| `link-in-bio-and-traffic` | Bio, click, traffico, UTM |

## Le 5 aggiunte per questa campagna

| Skill | Perché mancava |
|---|---|
| `caption-writer` | Era citata da 4 skill ma non installata. Scrive la caption per piattaforma, con CTA e disclosure |
| `campaign-analytics` | Nessuna skill copriva misurazione, UTM e i 600 inviti senza numeri inventati |
| `referral-compliance` | Disclosure, regole per piattaforma e comportamenti che fanno bannare |
| `video-production` | Dal copione al MP4: ripresa, safe zone, audio, export, Remotion |
| `community-engagement` | Commenti e DM: risposte utili, niente spam, moderazione |

## Cosa contengono le cartelle

Le 14 di base hanno anche `references/` ed `evals/` (96 file in totale). Le trovi complete in
`freebuff-kit-text.zip`, scaricabile dalla pagina pubblica e presente nel repo. Nel repo sono
browsabili le 5 aggiunte, così vedi subito come sono fatte.

Le 5 aggiunte sono autosufficienti: un solo `SKILL.md`, nessuna dipendenza esterna.

## Come sceglierne una

- Devo scrivere un post? `hook-writer` → `caption-writer`.
- Devo girare un video? `reels-script` o `tiktok-script` → `video-production`.
- Devo pubblicare un link referral? `referral-compliance` → `link-in-bio-and-traffic`.
- Devo capire se funziona? `campaign-analytics`.
- Devo rispondere a commenti e DM? `community-engagement`.
- Devo pianificare due settimane? `content-calendar` → `cross-platform-repurposing`.

## Regola

Una skill non è una verità. Se il suo consiglio contraddice i dati della tua pagina, vince il
dato. Se contraddice le regole della piattaforma, vincono le regole.
