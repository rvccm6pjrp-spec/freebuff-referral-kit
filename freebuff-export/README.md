# Pacchetto di produzione Freebuff

Tutto quello che serve per pubblicare il promo e girare gli otto contenuti. Nessun volto,
nessun budget, nessun file da inventare: testi, voiceover, timecode, prompt, preset e video.

**Pagina pubblica:** https://site-2f41f8031e8745daaaa3f1ead41ad35f.freebuff.page
**Video:** `remotion/out/promo/FREEBUFF-promo-v01.mp4`
**Formato:** verticale 9:16, 1080×1920, 30 fps
**Lingua:** italiano
**Durata:** 20–35 secondi per video

---

## Struttura

```
freebuff-export/
├── README.md
├── manifest.csv               ← 50 asset classificati
├── checklist.md               ← controlli prima di pubblicare
├── strategia/                 ← 600 inviti, piano 90 giorni, calendario 14 giorni
├── 01-scripts/                ← 8 script con timecode e shot list
├── 02-voiceover/              ← testo esatto della voce
├── 03-captions/               ← SRT pronti
├── 04-prompts/                ← immagini e motion
├── 05-presets/                ← export e loudness
├── 06-promo/                  ← istruzioni e caption del promo
├── 07-distribuzione/          ← dove mettere il link e regole anti-spam
└── remotion/                  ← sorgente + MP4 + overlay
```

Le 54 skill reali stanno in `../skills/` e nel pacchetto `../freebuff-kit-text.zip`.
L'handover per la collega è `../INIZIA-QUI.md`.

---

## Workflow in sei passi

1. **Prepara il repo demo.** Un progetto vero, non un mockup. Serve per registrare `git diff` e
   terminale.
2. **Registra i VIDEO.** Segui la shot list di ogni script. 1080×1920 se possibile, altrimenti
   1920×1080 e ritaglia.
3. **Registra il voiceover.** Usa `02-voiceover/`. Se usi un TTS, mantieni la stessa voce per
   tutti gli otto video.
4. **Crea i MOTION.** Segui `04-prompts/motion.md`; gli overlay sono già in
   `remotion/out/motion/`.
5. **Monta.** Video sotto, motion sopra, voiceover, musica al 12–18%, sottotitoli bruciati.
6. **Esporta** con `05-presets/export.md` e pubblica con la caption dello script.

---

## Regole di produzione

- **Niente testo nelle immagini generate.** L'italiano dentro i modelli esce sbagliato.
- **Niente volto.** Mani, schermo, terminale. Se serve una presenza, usa una voce.
- **Niente intro.** Il primo fotogramma è già il contenuto.
- **Prova prima della promessa.** Mostra un risultato reale, non un rendering.
- **Un video, un'idea.**
- **Riverifica i prezzi il giorno della registrazione.**

---

## Export finale

```bash
cd freebuff-export/remotion
npm install
npm run render:promo
```

Il pacchetto completo, con le 96 file delle skill e i sei overlay, è
`../freebuff-kit-full.zip` (29 MB). La versione testuale, senza binari, è
`../freebuff-kit-text.zip` (1,5 MB).
