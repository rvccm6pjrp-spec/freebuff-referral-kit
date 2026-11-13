# Promo Freebuff — 26 secondi

Un motion pubblicabile, senza riprese e senza volto. Mostra il costo reale degli abbonamenti, lo mette a zero e chiude con il codice invito.

**File:** `remotion/out/promo/FREEBUFF-promo-v01.mp4`
**Formato:** 1080x1920, 30 fps, H.264, 26 secondi
**Audio:** nessuno. La musica si aggiunge in CapCut o in montaggio.

---

## Prima di pubblicare: metti il tuo codice

Apri `remotion/src/config.ts` e sostituisci:

```ts
export const REFERRAL_CODE = 'IL-TUO-CODICE';
```

Poi rigenera:

```bash
cd freebuff-export/remotion
npm run render:promo
```

Senza questo passaggio il video mostra un segnaposto e non e pubblicabile.

---

## Cosa dice il video

1. Una ricevuta si stampa: Cursor 20,00, Claude 20,00, Copilot 10,00.
2. Totale: 50,00 €/mese.
3. Annuale: 600 €/anno.
4. Un timbro verde: 0,00, gratis.
5. CTA: `freebuff.com`, comando di installazione, codice invito, disclosure.

Tutti i prezzi sono di listino e vanno riverificati il giorno della pubblicazione. Se cambiano, aggiorna `PromoFreebuff.tsx`.

---

## Caption

> Quanto paghi per scrivere codice?
> Cursor 20, Claude 20, Copilot 10. Sono 600 € l'anno.
> Freebuff e gratis, senza carta e senza trial.
> Provalo sullo stesso task. Poi decidi.
> Codice in bio.
> ADV: referral personale, se usi il codice ricevo sessioni extra.
> #coding #ai #programmazione #freelance #freebuff

---

## Musica

- BPM 95–110, loop strumentale.
- Volume al 10–15%, la voce non c'e: il testo deve respirare.
- Un "tick" sulla comparsa di ogni riga della ricevuta, un "thud" sul timbro.
- Evita sound trend vocali: il video e tipografico, non parlato.

---

## Dove pubblicarlo

- TikTok e Reels: formato nativo, 26 secondi.
- YouTube Shorts: aggiungi `freebuff` nel titolo.
- X: caricalo come video nativo, non come link.
- LinkedIn: funziona come "quanto costa il tuo stack", con caption piu analitica.

---

## Se vuoi modificarlo

- **Prezzi:** `src/compositions/PromoFreebuff.tsx`, componenti `Line`.
- **Testi:** stessa posizione, stringhe in chiaro.
- **Codice:** `src/config.ts`.
- **Durata:** `src/Root.tsx`, `durationInFrames` della composizione `PROMO-Freebuff`.
- **Colori:** `src/theme.ts`.
