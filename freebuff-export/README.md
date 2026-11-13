# Freebuff Export — pacchetto di produzione

Tutto quello che serve per girare, montare ed esportare gli otto contenuti Freebuff. I sei overlay e il promo sono gia renderizzati; qui trovi anche voiceover, timecode, prompt e preset.

**Versione:** 13 novembre 2026
**Formato:** verticale 9:16, 1080x1920, 30 fps
**Lingua:** italiano
**Durata:** 20–35 secondi per video

---

## Struttura

```
freebuff-export/
├── README.md
├── manifest.csv               ← elenco completo degli asset
├── checklist.md               ← controlli prima di pubblicare
├── 01-scripts/                ← un file per video, con timecode e shot list
├── 02-voiceover/              ← testo esatto della voce
├── 03-captions/               ← sottotitoli SRT
├── 04-prompts/
│   ├── immagini.md
│   └── motion.md
├── 05-presets/
│   └── export.md
├── 06-promo/                  ← istruzioni e caption del promo
└── remotion/                  ← progetto per overlay e promo
    ├── src/
    ├── scripts/
    ├── out/
    └── README.md
```

---

## Legenda dei tipi di asset

| Tipo | Cosa significa | Formato | Chi lo produce |
|---|---|---|---|
| **VIDEO** | Ripresa reale dello schermo o delle mani | MP4/MOV, 1080x1920 | Registrazione schermo, telefono |
| **MOTION** | Grafica animata: contatori, prezzi, wipe, barre | MOV con alpha | Remotion, CapCut, After Effects |
| **PHOTO** | Immagine statica: copertina, thumbnail, sfondo | PNG/JPG | GPT Image, Canva |
| **AUDIO** | Voiceover e musica | WAV 48 kHz, MP3 320 kbps | Voce umana o TTS |
| **CAPTION** | Sottotitoli e testi a schermo | SRT, PNG con alpha | Trascrizione, CapCut |

Nel `manifest.csv` ogni riga ha `asset_id`, `tipo`, `durata_s`, `risoluzione`, `file_atteso` e `stato`.

---

## Workflow in sei passi

1. **Prepara il repo demo.** Un progetto vero, non un mockup.
2. **Registra i VIDEO.** Segui la shot list di ogni script.
3. **Registra il voiceover.** Usa i file in `02-voiceover/`.
4. **Crea i MOTION.** Il progetto Remotion li genera gia: `npm run render`.
5. **Monta.** Video sotto, motion sopra, voiceover, musica al 12–18%, sottotitoli bruciati.
6. **Esporta** con `05-presets/export.md` e pubblica con la caption dello script.

---

## Regole di produzione

- **Niente testo nelle immagini generate.** I testi si aggiungono in montaggio.
- **Niente volto.** Mani, schermo, terminale. Se serve una presenza, usa una voce.
- **Niente intro.** Il primo fotogramma e gia il contenuto.
- **Prova prima della promessa.** Ogni video mostra un risultato reale.
- **Un video, un'idea.**
- **Riverifica i prezzi il giorno della registrazione.** Cursor, Claude e Copilot cambiano listino.

---

## Export finale

```bash
cd /workspace/chats/ce8c1a0c58104488f4ba991a
zip -r freebuff-export.zip freebuff-export \
  -x 'freebuff-export/remotion/node_modules/*'
```

Il file contiene testi, CSV, SRT, prompt e gli asset gia renderizzati. `node_modules` resta fuori: si reinstalla con `npm install`.
