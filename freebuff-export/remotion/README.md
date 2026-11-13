# Freebuff Motion — Remotion

Sei overlay motion trasparenti e un promo verticale, 1080x1920, 30 fps.

## Requisiti

- Node 20 o superiore
- npm
- Connessione per il primo render (scarica Chrome Headless Shell e i font)

## Installazione

```bash
cd freebuff-export/remotion
npm install
```

## Anteprima

```bash
npm run studio
```

Si apre Remotion Studio. Seleziona una composizione e premi spazio.

## Render delle anteprime PNG

```bash
npm run still
```

Output in `out/stills/`. Serve per controllare testi e colori prima del render finale.

## Render dei sei overlay

```bash
npm run render
```

Output in `out/motion/`, un file ProRes 4444 con alpha per ogni composizione.

## Promo pubblicabile

La composizione `PROMO-Freebuff` e un video verticale di 26 secondi, impaginato per TikTok, Reels e Shorts: ricevuta dei costi, timbro "gratis", CTA e codice invito.

```bash
npm run render:promo
```

Output: `out/promo/FREEBUFF-promo-v01.mp4` (H.264, 1080x1920, 30 fps, senza audio).

**Prima di pubblicare** imposta il tuo codice in `src/config.ts`. Senza codice il video mostra `IL-TUO-CODICE`.

## Mapping con i video

| Composizione | File | Usata in | Durata |
|---|---|---|---|
| MOT-01-PriceSlam | `F1-MOT-01.mov` | F1, F2 | 2,0 s |
| MOT-02-CounterZero | `F2-MOT-02.mov` | F2 | 2,0 s |
| MOT-03-CounterStack | `F5-MOT-01.mov` | F5, F3 | 3,0 s |
| MOT-04-WipeReveal | `F4-MOT-01.mov` | F4, F7 | 0,6 s |
| MOT-05-CommandCounter | `F6-MOT-01.mov` | F6 | 3,0 s |
| MOT-06-BarFill | `F8-MOT-01.mov` | F8 | 3,0 s |

## Come si montano

1. Importa il video in CapCut, Premiere o DaVinci.
2. Metti il `.mov` su una traccia superiore.
3. Allinea il primo frame del motion al timecode indicato nello script.
4. Non ridimensionare: e gia 1080x1920.
5. Se il motion copre il viso o il codice, sposta il video sotto, non il motion.

## Personalizzazione

- **Testi:** in `src/compositions/`, ogni componente ha il testo in chiaro.
- **Colori:** `src/theme.ts`, palette unica.
- **Font:** Inter e JetBrains Mono da Google Fonts, caricati da `@remotion/google-fonts`.
- **Durate:** `src/Root.tsx`, `durationInFrames`. A 30 fps, 30 frame = 1 secondo.
- **Codice invito:** `src/config.ts`.

## Come e fatto il trasparente

- Codec ProRes 4444.
- Pixel format `yuva444p10le`.
- Immagini PNG.
- Sfondo `transparent` in ogni composizione.

Senza questi parametri il file esce nero e sembra rotto. Sono gia impostati in `remotion.config.ts` e nello script di render.

## Problemi comuni

**Chrome non parte**
Remotion scarica `chrome-headless-shell`. Se la rete lo blocca, passagli un binario locale con `browserExecutable`.

**Linux: `libnspr4.so: cannot open shared object file`**
Mancano le librerie di sistema del browser. Su Ubuntu/Debian:

```bash
sudo apt-get install -y libnspr4 libnss3 libatk1.0-0t64 libatk-bridge2.0-0t64 \
  libcups2t64 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 \
  libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2t64 libatspi2.0-0t64
```

Senza root puoi scaricare i `.deb`, estrarli in una cartella e lanciare con `LD_LIBRARY_PATH`.

**Il file esce nero**
Controlla di aver renderizzato con `codec: 'prores'`, `proResProfile: '4444'`, `pixelFormat: 'yuva444p10le'`.

**I font non si caricano**
Al primo render servono 5–10 secondi in piu. Se la rete e bloccata, sostituisci i font in `theme.ts`.

## Struttura

```
remotion/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── scripts/
│   ├── render-all.mjs
│   ├── render-promo.mjs
│   └── render-stills.mjs
└── src/
    ├── index.ts
    ├── Root.tsx
    ├── theme.ts
    ├── config.ts
    ├── components/Preview.tsx
    └── compositions/
        ├── PriceSlam.tsx
        ├── CounterZero.tsx
        ├── CounterStack.tsx
        ├── WipeReveal.tsx
        ├── CommandCounter.tsx
        ├── BarFill.tsx
        └── PromoFreebuff.tsx
```
