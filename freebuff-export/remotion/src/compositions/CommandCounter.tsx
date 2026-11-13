import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONT_MONO} from '../theme';

const DIGITS = ['1', '2', '3'];

export const CommandCounter: React.FC = () => {
  const frame = useCurrentFrame();
  const step = Math.min(2, Math.floor(frame / 24));
  const local = frame - step * 24;

  const opacity = interpolate(local, [0, 3], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(local, [0, 5], [1.1, 1], {
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
            fontSize: 180,
            color: COLORS.green,
            opacity,
            transform: `scale(${scale})`,
            lineHeight: 1,
          }}
        >
          {DIGITS[step]}
        </div>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontWeight: 400,
            fontSize: 42,
            color: COLORS.white,
            marginTop: 28,
            opacity: 0.9,
          }}
        >
          npm i -g freebuff
        </div>
      </div>
    </AbsoluteFill>
  );
};
