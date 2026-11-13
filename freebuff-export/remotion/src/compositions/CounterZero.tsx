import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONT_MONO} from '../theme';

const STEPS = ['20 €', '15 €', '10 €', '0 €'];

export const CounterZero: React.FC = () => {
  const frame = useCurrentFrame();
  const step = Math.min(3, Math.floor(frame / 12));
  const local = frame - step * 12;

  const blur = local < 4 ? 8 * (1 - local / 4) : 0;
  const scale = local < 4 ? interpolate(local, [0, 4], [1.08, 1]) : 1;
  const isLast = step === 3;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: FONT_MONO,
          fontWeight: 700,
          fontSize: 160,
          color: isLast ? COLORS.green : COLORS.white,
          fontVariantNumeric: 'tabular-nums',
          filter: `blur(${blur}px)`,
          transform: `scale(${scale})`,
          textShadow: isLast ? '0 0 40px rgba(124,255,107,0.35)' : 'none',
        }}
      >
        {STEPS[step]}
      </div>
    </AbsoluteFill>
  );
};
