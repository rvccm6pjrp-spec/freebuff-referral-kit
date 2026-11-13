# Freebuff Referral Kit

Materiali pronti per portare utenti su [Freebuff](https://freebuff.com) con un codice invito personale: script, motion, un promo verticale e il piano di pubblicazione.

Niente spam, niente DM non richiesti, niente promesse di guadagno. Solo contenuti che mostrano cosa fa il prodotto e quanto costa.

---

## Il promo

Composizione `PROMO-Freebuff`: 1080x1920, 30 fps, H.264, 26 secondi.

- Ricevuta dei costi: Cursor 20, Claude 20, Copilot 10, totale 50 €/mese
- Timbro verde: 0,00, gratis
- CTA con comando di installazione e codice invito
- Disclosure del referral nell'ultima schermata

**Prima di pubblicare** imposta il tuo codice in `freebuff-export/remotion/src/config.ts` e rigenera:

```bash
cd freebuff-export/remotion
npm install
npm run render:promo
```

Senza questo passaggio il video mostra `IL-TUO-CODICE`.

---

## Cosa c'è dentro

### Contenuti

- `freebuff-export/01-scripts/` — 8 script completi, con hook, beat, shot list, voiceover e rischi.
- `freebuff-export/02-voiceover/` — testi voiceover pronti.
- `freebuff-export/03-captions/` — sottotitoli SRT.
- `freebuff-export/04-prompts/` — prompt immagini e specifiche motion.
- `freebuff-export/05-presets/` — preset di export e loudness.
- `freebuff-export/06-promo/` — istruzioni e caption del promo.
- `freebuff-export/manifest.csv` — 50 asset classificati.

### Strategia

- `strategy/README.md` — matematica dei 600, serie 0/600, compliance.
- `campagna-buddy/13-freebuff-600.md` — verifica reward, pubblico, canali, piano 90 giorni.
- `campagna-buddy/14-freebuff-italia-90.md` — piano operativo Italia, 15 hook, calendario.
- `campagna-buddy/17-contenuti-v2.md` — 8 script Freebuff + 5 buddybank, 20 hook, piano 14 giorni.

### Skill

- `.agents/skills/` — 4 definizioni operative: `hook-writer`, `tiktok-script`, `reels-script`, `content-calendar`.
- `.agents/skills/README.md` — elenco delle 14 skill installate.

Le 14 skill complete (96 file, 884 KB, con references ed evals) e gli altri 16 documenti buddybank sono nel pacchetto `freebuff-kit-full.zip`.

### Motion

- `freebuff-export/remotion/src/` — 6 overlay + promo.
- `freebuff-export/remotion/scripts/` — render di tutti gli asset.

---

## Comandi

```bash
cd freebuff-export/remotion
npm install

npm run studio        # anteprima interattiva
npm run render        # 6 overlay .mov con alpha
npm run render:promo  # promo MP4 pubblicabile
npm run still         # anteprime PNG
```

Gli overlay sono ProRes 4444, 1080x1920, 30 fps, `yuva444p12le`. Si montano sopra video sorgente in DaVinci, Premiere o CapCut.

I binari (MP4, MOV, zip) non sono versionati: si rigenerano con i comandi. Il pacchetto gia renderizzato e `freebuff-kit-full.zip`.

---

## Checklist prima di pubblicare

- [ ] Codice invito impostato in `src/config.ts`
- [ ] Prezzi degli abbonamenti riverificati il giorno stesso
- [ ] Musica aggiunta e mixata al 10–15%
- [ ] Disclosure del referral visibile
- [ ] Caption con codice e hashtag
- [ ] Pubblicato in nativo su TikTok, Reels, Shorts e X

---

## Stato

| Cosa | Stato |
|---|---|
| Script e copy | pronti |
| Overlay motion | renderizzati |
| Promo verticale | renderizzato |
| Riprese reali | da fare |
| Pubblicazione | da fare |

Il kit non garantisce un numero di iscritti: la conversione dipende da hook, pubblico e frequenza. Il caso studio usato per le stime e documentato in `strategy/README.md`.

---

## Licenza

Uso personale per la campagna referral. I marchi citati appartengono ai rispettivi proprietari.
