# Motion graphics — specifiche

Sei animazioni, tutte replicabili in CapCut con i keyframe. Se usi After Effects o Remotion, i valori sono gli stessi.

**Base:** 1080×1920, 30 fps, durata indicata per ogni ricetta.
**Font titoli:** Inter Bold o Archivo Black. **Font tecnico:** JetBrains Mono.
**Palette:** inchiostro `#0B0F0E`, crema `#F2EBDD`, verde `#7CFF6B`, rosso `#FF5C4D`.

**Safe zone:** tutto il testo dentro il rettangolo centrale 1080×1420. Niente testo sotto y=1600 o sopra y=220.

---

## MOT-01 — Price slam

**Usato in:** F1, F2
**Durata:** 2,0 s (60 frame)

| Frame | Proprietà | Valore |
|---|---|---|
| 0 | Scala | 120% |
| 0 | Opacità | 0% |
| 2 | Opacità | 100% |
| 7 | Scala | 100% |
| 8–50 | Hold | 100% |
| 51–60 | Opacità | 100% → 90% |

**Easing:** ease-out cubic sull'ingresso, nessun bounce.
**Dettaglio:** una sottolineatura verde di 4 px si disegna da sinistra a destra tra i frame 4 e 12.
**Testo:** 120 px, bianco, centrato a y=900.

---

## MOT-02 — Contatore 20 → 0

**Usato in:** F2
**Durata:** 2,0 s

Quattro passi, uno ogni 0,4 s: `20 €` → `15 €` → `10 €` → `0 €`.
Ogni passo: 0,12 s di blur verticale 8 px, poi testo nitido.
L'ultimo passo resta 0,6 s con un alone verde al 20% di opacità.

**Testo:** 160 px, monospace, bianco; l'ultimo `0 €` in verde.

---

## MOT-03 — Contatore 50 → 600

**Usato in:** F5, F3
**Durata:** 3,0 s

Il numero sale con easing ease-in-out, non lineare: parte lento, accelera, rallenta alla fine.
Frame 0: `50 €`. Frame 75: `600 €`. Hold fino a 90.
Numeri tabulari, monospace, 140 px.
Il simbolo `€` resta fermo mentre il numero cambia.

---

## MOT-04 — Wipe reveal

**Usato in:** F4, F7
**Durata:** 0,6 s (18 frame)

Un rettangolo crema copre lo schermo e scorre verso destra, rivelando il contenuto sotto.
Frame 0: x = -1080. Frame 12: x = 0. Frame 18: x = 1080.
**Easing:** cubic-bezier(0.16, 1, 0.3, 1).
**Bordo:** linea verde 4 px sul lato destro del rettangolo.

---

## MOT-05 — Contatore comandi 1, 2, 3

**Usato in:** F6
**Durata:** 3,0 s

Tre numeri grandi, uno ogni 0,8 s. Ognuno entra con scala 110→100 in 0,15 s e opacità 0→100 in 0,1 s.
Frame 0–24: `1`. Frame 24–48: `2`. Frame 48–72: `3`.
**Testo:** 180 px, monospace, verde, centrato a y=760.
Sotto, una riga fissa: `npm i -g freebuff` in 42 px, bianco.

---

## MOT-06 — Barra 47/600

**Usato in:** F8
**Durata:** 3,0 s

Traccia: 800×24 px, crema al 25%, angoli 12 px, centrata a y=820.
Riempimento: verde, larghezza 0→7,8% in 1,2 s con ease-out.
Contatore a destra: `0` → `47` in 1,2 s, monospace 64 px.
Etichetta sopra: `47/600` in 96 px, bianca, che appare al frame 36.

**Nota matematica:** 47/600 = 7,83%. Non arrotondare a 8%: la barra deve essere coerente con il numero.

---

## Export dei motion

- **Con alpha:** ProRes 4444 o PNG sequence, 1080×1920, 30 fps.
- **Senza alpha:** MP4 H.264, 1080×1920, 30 fps, 16 Mbps.
- **Naming:** `F1-MOT-01.mov`, `F2-MOT-02.mov`.
- **Durata:** mai più lunga del beat che accompagna.

---

## Se usi Remotion

Ogni ricetta è un `interpolate` con `Easing.out(Easing.cubic)`. La struttura minima:

```tsx
const scale = interpolate(frame, [0, 7], [1.2, 1], {
  easing: Easing.out(Easing.cubic),
  extrapolateRight: "clamp",
});
```

Per il contatore, `Math.round(interpolate(frame, [0, 75], [50, 600]))` e `fontVariantNumeric: "tabular-nums"`.
