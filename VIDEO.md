# Il video

**Percorso nel repo:** `freebuff-export/remotion/out/promo/FREEBUFF-promo-v01.mp4`
**Pagina pubblica:** https://site-2f41f8031e8745daaaa3f1ead41ad35f.freebuff.page
**Download diretto:** https://site-2f41f8031e8745daaaa3f1ead41ad35f.freebuff.page/FREEBUFF-promo-v01.mp4

## Specifiche

| Parametro | Valore |
|---|---|
| Durata | 26,0 secondi |
| Risoluzione | 1080×1920 (9:16) |
| Frame rate | 30 fps |
| Codec | H.264, yuv420p |
| Audio | nessuno |
| Dimensione | 1,1 MB |
| CTA | `freebuff.com` + `LINK IN BIO` |
| Disclosure | `ADV: link referral in bio. Se lo usi ricevo sessioni extra.` |

## Cosa mostra

1. Una ricevuta si stampa: Cursor 20,00 €, Claude 20,00 €, Copilot 10,00 €.
2. Totale 50,00 €/mese, 600 €/anno.
3. Timbro verde `0,00` / `GRATIS`.
4. CTA con comando `npm i -g freebuff`, `freebuff.com`, `LINK IN BIO`.

I prezzi sono di listino e vanno riverificati il giorno della pubblicazione.

## Rigenerarlo

```bash
cd freebuff-export/remotion
npm install
npm run render:promo
```

Su Linux minimale, Chrome può aver bisogno delle librerie di sistema:

```bash
LD_LIBRARY_PATH=/tmp/chromium-libs/usr/lib/x86_64-linux-gnu:/tmp/chromium-libs/lib/x86_64-linux-gnu \
  npm run render:promo
```

Anteprime: `npm run still` → `out/stills/`.

## Se il file non è nel repo

Il workflow `.github/workflows/import-promo.yml` scarica il MP4 dalla pagina pubblica e lo
committa. Si attiva da solo quando viene aggiunto, oppure manualmente da **Actions → Import
promo video → Run workflow**.

Se il workflow non è disponibile, scarica il video dalla pagina pubblica e mettilo nel
percorso qui sopra. Il resto del kit funziona anche senza il binario: il sorgente Remotion è
nel repo e il video si rigenera con due comandi.

## Pubblicazione

- Musica strumentale al 10–15%, nessuna voce.
- Pubblica in nativo su TikTok, Reels, Shorts e X.
- Link in bio/descrizione, **non** nei commenti di altri.
- `ADV` e toggle contenuto commerciale sempre.
- Caption pronta: `freebuff-export/06-promo/caption.txt`.

Regole complete: `freebuff-export/07-distribuzione/REGOLE-LINK.md`.
