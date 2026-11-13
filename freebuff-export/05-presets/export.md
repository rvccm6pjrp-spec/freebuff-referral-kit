# Export — specifiche tecniche

---

## Master di montaggio

| Parametro | Valore |
|---|---|
| Risoluzione | 1080×1920 |
| Frame rate | 30 fps progressivo |
| Codec | ProRes 422 HQ (MOV) |
| Audio | PCM 48 kHz, 24 bit, stereo |
| Color space | Rec.709 |
| LUT | nessuna, correggi a mano |

---

## Delivery per TikTok, Reels, Shorts

| Parametro | Valore |
|---|---|
| Contenitore | MP4 |
| Video codec | H.264 High Profile, Level 4.2 |
| Risoluzione | 1080×1920 |
| Frame rate | 30 fps |
| Bitrate video | 12 Mbps VBR, 2 pass |
| Keyframe | ogni 2 secondi |
| Audio codec | AAC-LC, 320 kbps, 48 kHz |
| Loudness | -14 LUFS integrati |
| True peak | -1 dBTP |
| Durata | 20–35 s |
| Dimensione target | 25–45 MB |

---

## Comando ffmpeg

Da master ProRes a delivery:

```bash
ffmpeg -i master.mov \
  -vf "scale=1080:1920:flags=lanczos,fps=30" \
  -c:v libx264 -profile:v high -level 4.2 -preset slow -crf 18 \
  -maxrate 14M -bufsize 28M -g 60 -keyint_min 60 -sc_threshold 0 \
  -pix_fmt yuv420p \
  -af "loudnorm=I=-14:TP=-1:LRA=11" \
  -c:a aac -b:a 320k -ar 48000 -ac 2 \
  -movflags +faststart \
  FB_F1_collega_v01.mp4
```

Verifica il risultato:

```bash
ffprobe -v error -show_entries format=duration,size,bit_rate \
  -show_entries stream=codec_name,width,height,r_frame_rate \
  -of default=noprint_wrappers=1 FB_F1_collega_v01.mp4
```

---

## Copertine

| Piattaforma | Formato | Note |
|---|---|---|
| TikTok | JPG/PNG 1080×1920 | Testo grande, leggibile a 200 px di larghezza |
| Reels | JPG/PNG 1080×1350 | La copertina del feed è 4:5 |
| Shorts | JPG/PNG 1080×1920 | Evita testo sotto y=1500 |

Dimensione massima consigliata: 2 MB.

---

## Naming

```
FB_<video>_<slug>_v<numero>.<ext>
```

Esempi:

- `FB_F1_collega_v01.mp4`
- `FB_F3_abbonamenti_v02.mp4`
- `FB_F4_fattura_cover_v01.png`

Mantieni `v01`, `v02` invece di `final`, `final2`, `definitivo`.

---

## Safe zone

Le interfacce coprono i bordi. Tieni testo e elementi importanti dentro:

- **Alto:** 220 px liberi.
- **Basso:** 420 px liberi.
- **Destra:** 140 px liberi.
- **Area sicura:** 1080×1360 centrata.

Controlla sempre su un telefono, non solo nel preview del desktop.

---

## Audio

- Voiceover a -6 dB rispetto al master.
- Musica a -18 dB rispetto alla voce, circa il 12–15% del volume.
- SFX tra -12 e -6 dB.
- Normalizza a -14 LUFS solo all'ultimo passaggio, non sul master.
- Taglia le frequenze sotto 80 Hz sulla voce.

---

## Controllo finale

1. Il primo frame è già il contenuto, senza nero.
2. Il testo è leggibile su un telefono a 50 cm.
3. La voce è più forte della musica.
4. Il loop funziona: l'ultima frase riporta alla prima.
5. Non ci sono watermark o loghi di tool di editing.
6. Il file si apre su un altro dispositivo.
