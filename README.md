# Freebuff Referral Kit

Materiali pronti per portare utenti su [Freebuff](https://freebuff.com) con un link invito personale: script, motion, un promo verticale già renderizzato e il piano di pubblicazione.

Niente spam, niente DM non richiesti, niente promesse di guadagno. Solo contenuti che mostrano cosa fa il prodotto e quanto costa.

**Link referral:**
`https://freebuff.com/?ref=ref-f0f0c25f-722c-4afd-8fa5-a8a96d66f799&via=rewards_link`

---

## Il promo

`freebuff-export/remotion/out/promo/FREEBUFF-promo-v01.mp4`

- 1080×1920, 30 fps, H.264, 26 secondi
- Nessun audio: la musica si aggiunge in montaggio
- Ricevuta dei costi → timbro "gratis" → CTA `LINK IN BIO`
- Disclosure del referral inclusa nell'ultima schermata

Per rigenerare il video:

```bash
cd freebuff-export/remotion
npm install
npm run render:promo
```

Il link è già in `freebuff-export/remotion/src/config.ts`. Il video non mostra l'URL completo: sarebbe illeggibile. Va messo in bio, descrizione o commento a seconda della piattaforma.

**Dove metterlo, piattaforma per piattaforma:** `freebuff-export/07-distribuzione/REGOLE-LINK.md`.

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
├── 07-distribuzione/ dove mettere il link e regole anti-spam
├── manifest.csv      50 asset classificati
└── remotion/         progetto Remotion: 6 overlay + promo
    ├── src/
    ├── scripts/
    └── out/
        ├── motion/   6 overlay ProRes 4444 con alpha
        ├── promo/    MP4 pubblicabile
        └── stills/   anteprime PNG
```

Le tre schede strategiche stanno in `campagna-buddy/`:

- `13-freebuff-600.md` — matematica della crescita: view, click, utenti
- `14-freebuff-italia-90.md` — piano Italia 90 giorni
- `17-contenuti-v2.md` — 8 script, 20 hook, calendario 14 giorni

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

Gli overlay sono ProRes 4444, 1080×1920, 30 fps, `yuva444p12le`. Si montano sopra video sorgente in DaVinci, Premiere o CapCut.

---

## Checklist prima di pubblicare

- [ ] Link referral nel posto cliccabile giusto per la piattaforma
- [ ] Prezzi degli abbonamenti riverificati il giorno stesso
- [ ] Musica aggiunta e mixata al 10–15%
- [ ] Disclosure `ADV` visibile, contenuto commerciale attivato dove richiesto
- [ ] Caption con CTA e hashtag
- [ ] Pubblicato in nativo su TikTok, Reels, Shorts e X

---

## Stato

| Cosa | Stato |
|---|---|
| Script e copy | pronti |
| Overlay motion | renderizzati |
| Promo verticale | renderizzato con link in bio |
| Riprese reali | da fare |
| Pubblicazione | da fare |

Il kit non garantisce un numero di iscritti: la conversione dipende da hook, pubblico e frequenza. Il caso studio usato per le stime è documentato in `campagna-buddy/13-freebuff-600.md`.

---

## Licenza

Uso personale per la campagna referral. I marchi citati appartengono ai rispettivi proprietari.
