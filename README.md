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

Gli asset binari (MP4, MOV, zip) non sono versionati: si rigenerano con i comandi sotto. Il pacchetto completo, gia renderizzato, e in `freebuff-export.zip` nel workspace locale.

---

## Struttura

```
freebuff-export/
├── 01-scripts/       8 script completi (hook, corpo, CTA, note di ripresa)
├── 02-voiceover/     testi voiceover pronti
├── 03-captions/      sottotitoli SRT
├── 04-prompts/       prompt immagini e specifiche motion
├── 05-presets/       preset di export e loudness
├── 06-promo/         istruzioni e caption del promo
├── manifest.csv      50 asset classificati
└── remotion/         progetto Remotion: 6 overlay + promo
    ├── src/
    ├── scripts/
    └── out/
        ├── motion/   6 overlay ProRes 4444 con alpha
        ├── promo/    MP4 pubblicabile
        └── stills/   anteprime PNG
```

La strategia completa e in `strategy/README.md`; i documenti estesi sono in `campagna-buddy/` nel workspace locale.

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
