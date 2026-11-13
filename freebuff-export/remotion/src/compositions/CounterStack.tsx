import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONT_MONO, FONT_TITLE} from '../theme';

const euro = new Intl.NumberFormat('it-IT');

export const CounterStack: React.FC = () => {
  const frame = useCurrentFrame();

  const value = Math.round(
    interpolate(frame, [0, 75], [50, 600], {
      easing: Easing.inOut(Easing.cubic),
      extrapolateRight: 'clamp',
    })
  );

  const labelOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{textAlign: 'center'}}>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontWeight: 700,
            fontSize: 140,
            color: COLORS.green,
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: -4,
          }}
        >
          {euro.format(value)} €
        </div>
        <div
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 700,
            fontSize: 42,
            color: COLORS.white,
            opacity: labelOpacity,
            marginTop: 12,
            letterSpacing: 2,
          }}
        >
          ALL&apos;ANNO
        </div>
      </div>
    </AbsoluteFill>
  );
};
