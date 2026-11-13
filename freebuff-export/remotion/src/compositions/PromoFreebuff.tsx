import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT_MONO, FONT_TITLE} from '../theme';
import {REFERRAL_CODE, SITE} from '../config';

const INK = COLORS.ink;
const CREAM = COLORS.cream;
const GREEN = COLORS.green;
const DARK_GREEN = '#1F7A3D';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const Line: React.FC<{
  label: string;
  price: string;
  start: number;
  bold?: boolean;
}> = ({label, price, start, bold = false}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [start, start + 15], [0, 1], clamp);
  const y = interpolate(progress, [0, 1], [16, 0]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        opacity: progress,
        transform: `translateY(${y}px)`,
        fontFamily: FONT_MONO,
        fontSize: bold ? 38 : 34,
        fontWeight: bold ? 700 : 400,
        color: INK,
        marginTop: bold ? 24 : 18,
      }}
    >
      <span>{label}</span>
      <span style={{fontVariantNumeric: 'tabular-nums'}}>{price}</span>
    </div>
  );
};

export const PromoFreebuff: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const receiptIn = interpolate(frame, [0, 24], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  const receiptY = interpolate(frame, [0, 24], [60, 0], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  const receiptOut = interpolate(frame, [420, 450], [0, -900], {
    ...clamp,
    easing: Easing.in(Easing.cubic),
  });

  const receiptOpacity = interpolate(frame, [420, 448], [1, 0], clamp);

  const stamp = spring({
    frame: frame - 210,
    fps,
    config: {damping: 13, stiffness: 140, mass: 0.8},
  });

  const stampScale = interpolate(stamp, [0, 1], [1.45, 1]);
  const stampOpacity = interpolate(stamp, [0, 0.5], [0, 1], clamp);

  const ctaIn = interpolate(frame, [455, 490], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  const ctaY = interpolate(frame, [455, 490], [40, 0], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  const typed = 'npm i -g freebuff';
  const typeProgress = interpolate(frame, [590, 655], [0, typed.length], {
    ...clamp,
  });
  const typedText = typed.slice(0, Math.floor(typeProgress));

  const codePulse = 1 + 0.015 * Math.sin(frame / 8);

  const showReceipt = frame < 455;

  return (
    <AbsoluteFill style={{backgroundColor: INK}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 50% 38%, rgba(124,255,107,0.10), transparent 62%)',
        }}
      />

      {showReceipt ? (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: receiptOpacity,
            transform: `translateY(${receiptY + receiptOut}px)`,
          }}
        >
          <div
            style={{
              width: 820,
              backgroundColor: CREAM,
              borderRadius: 6,
              padding: '54px 52px 190px',
              boxShadow: '0 40px 80px rgba(0,0,0,0.45)',
              position: 'relative',
              opacity: receiptIn,
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 26,
                letterSpacing: 5,
                color: 'rgba(11,15,14,0.55)',
                textAlign: 'center',
              }}
            >
              IL CONTO DEL TUO STACK
            </div>

            <div
              style={{
                borderTop: '2px dashed rgba(11,15,14,0.25)',
                margin: '30px 0 10px',
              }}
            />

            <Line label="Cursor" price="20,00 €" start={55} />
            <Line label="Claude" price="20,00 €" start={85} />
            <Line label="Copilot" price="10,00 €" start={115} />

            <div
              style={{
                borderTop: '2px dashed rgba(11,15,14,0.25)',
                margin: '32px 0 4px',
              }}
            />

            <Line label="TOTALE" price="50,00 €/mese" start={150} bold />

            <div
              style={{
                fontFamily: FONT_TITLE,
                fontWeight: 900,
                fontSize: 84,
                color: INK,
                marginTop: 28,
                letterSpacing: -3,
                opacity: interpolate(frame, [180, 205], [0, 1], clamp),
                transform: `translateY(${interpolate(
                  frame,
                  [180, 205],
                  [20, 0],
                  clamp
                )}px)`,
              }}
            >
              600 €/anno
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 26,
                color: 'rgba(11,15,14,0.62)',
                marginTop: 14,
                opacity: interpolate(frame, [185, 210], [0, 1], clamp),
              }}
            >
              prima di scrivere una riga di codice
            </div>

            <div
              style={{
                position: 'absolute',
                right: 36,
                bottom: 34,
                border: `6px solid ${DARK_GREEN}`,
                borderRadius: 8,
                padding: '8px 20px 10px',
                transform: `rotate(-7deg) scale(${stampScale})`,
                opacity: stampOpacity,
                backgroundColor: 'rgba(242,235,221,0.85)',
              }}
            >
              <div
                style={{
                  fontFamily: FONT_TITLE,
                  fontWeight: 900,
                  fontSize: 64,
                  color: DARK_GREEN,
                  lineHeight: 1,
                }}
              >
                0,00
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  letterSpacing: 3,
                  color: DARK_GREEN,
                  textAlign: 'center',
                  marginTop: 6,
                }}
              >
                GRATIS
              </div>
            </div>
          </div>
        </AbsoluteFill>
      ) : null}

      {!showReceipt ? (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: ctaIn,
            transform: `translateY(${ctaY}px)`,
            padding: 90,
          }}
        >
          <div style={{textAlign: 'center', width: '100%'}}>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 28,
                letterSpacing: 5,
                color: GREEN,
                marginBottom: 22,
              }}
            >
              CODING AGENT
            </div>

            <div
              style={{
                fontFamily: FONT_TITLE,
                fontWeight: 900,
                fontSize: 104,
                lineHeight: 0.95,
                color: COLORS.white,
                letterSpacing: -4,
              }}
            >
              GRATIS.
              <br />
              DAVVERO.
            </div>

            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 34,
                color: 'rgba(255,255,255,0.7)',
                marginTop: 26,
              }}
            >
              senza carta, senza trial
            </div>

            <div
              style={{
                marginTop: 54,
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 12,
                padding: '22px 26px',
                fontFamily: FONT_MONO,
                fontSize: 30,
                color: GREEN,
                textAlign: 'left',
              }}
            >
              <span style={{opacity: 0.5}}>$ </span>
              {typedText}
              <span
                style={{
                  display: 'inline-block',
                  width: 14,
                  height: 32,
                  marginLeft: 3,
                  verticalAlign: 'middle',
                  backgroundColor: GREEN,
                  opacity: frame % 30 < 15 ? 1 : 0,
                }}
              />
            </div>

            <div
              style={{
                marginTop: 46,
                fontFamily: FONT_TITLE,
                fontWeight: 900,
                fontSize: 54,
                color: COLORS.white,
              }}
            >
              {SITE}
            </div>

            <div
              style={{
                marginTop: 30,
                display: 'inline-block',
                border: `4px solid ${GREEN}`,
                borderRadius: 10,
                padding: '16px 28px',
                transform: `scale(${codePulse})`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 20,
                  letterSpacing: 4,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                CODICE INVITO
              </div>
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontWeight: 700,
                  fontSize: 44,
                  color: GREEN,
                  marginTop: 6,
                  letterSpacing: 2,
                }}
              >
                {REFERRAL_CODE}
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 70,
                left: 0,
                right: 0,
                fontFamily: FONT_MONO,
                fontSize: 20,
                color: 'rgba(255,255,255,0.45)',
                textAlign: 'center',
              }}
            >
              ADV: referral personale. Se usi il codice ricevo sessioni extra.
            </div>
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
