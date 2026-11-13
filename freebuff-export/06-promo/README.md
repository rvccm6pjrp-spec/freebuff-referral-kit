# Promo Freebuff — 26 secondi

Un motion pubblicabile, senza riprese e senza volto. Mostra il costo reale degli abbonamenti, lo mette a zero e chiude con la CTA.

**File:** `remotion/out/promo/FREEBUFF-promo-v01.mp4`
**Formato:** 1080x1920, 30 fps, H.264, 26 secondi
**Audio:** nessuno. La musica si aggiunge in CapCut o in montaggio.

---

## Link già impostato

In `remotion/src/config.ts`:

```ts
export const REFERRAL_URL =
  'https://freebuff.com/?ref=ref-f0f0c25f-722c-4afd-8fa5-a8a96d66f799&via=rewards_link';
export const CTA = 'LINK IN BIO';
```

Il video non mostra l'URL completo: sarebbe illeggibile. Mostra `freebuff.com` e `LINK IN BIO`. Il link va messo in bio, descrizione o commento a seconda della piattaforma, seguendo `07-distribuzione/REGOLE-LINK.md`.

Per rigenerare dopo una modifica:

```bash
cd freebuff-export/remotion
npm run render:promo
```

---

## Cosa dice il video

1. Una ricevuta si stampa: Cursor 20,00, Claude 20,00, Copilot 10,00.
2. Totale: 50,00 €/mese.
3. Annuale: 600 €/anno.
4. Un timbro verde: 0,00, gratis.
5. CTA: `freebuff.com`, comando di installazione, `LINK IN BIO`, disclosure.

Tutti i prezzi sono di listino e vanno riverificati il giorno della pubblicazione. Se cambiano, aggiorna `PromoFreebuff.tsx`.

---

## Caption

> Quanto paghi per scrivere codice?
> Cursor 20, Claude 20, Copilot 10. Sono 600 € l'anno.
> Freebuff è gratis, senza carta e senza trial.
> Provalo sullo stesso task. Poi decidi.
> Link nel profilo.
> ADV: link referral personale, se lo usi ricevo sessioni extra.
> #coding #ai #programmazione #freelance #freebuff

---

## Musica

- BPM 95–110, loop strumentale.
- Volume al 10–15%, la voce non c'è: il testo deve respirare.
- Un "tick" sulla comparsa di ogni riga della ricevuta, un "thud" sul timbro.
- Evita sound trend vocali: il video è tipografico, non parlato.

---

## Dove pubblicarlo

- TikTok e Reels: formato nativo, 26 secondi. Link in bio, non nei commenti.
- YouTube Shorts: il link in descrizione non è cliccabile. Mettilo nei link del canale e in un commento fissato testuale.
- X: video nativo, link in un post successivo o nel profilo.
- LinkedIn: link nel post o nel primo commento.

Dettagli e divieti: `../07-distribuzione/REGOLE-LINK.md`.

---

## Se vuoi modificarlo

- **Prezzi:** `src/compositions/PromoFreebuff.tsx`, componenti `Line`.
- **Testi:** stessa posizione, stringhe in chiaro.
- **Link e CTA:** `src/config.ts`.
- **Durata:** `src/Root.tsx`, `durationInFrames` della composizione `PROMO-Freebuff`.
- **Colori:** `src/theme.ts`.
