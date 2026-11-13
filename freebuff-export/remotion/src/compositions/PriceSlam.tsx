import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONT_TITLE} from '../theme';

export const PriceSlam: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 7], [1.2, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(frame, [0, 2], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const underline = interpolate(frame, [4, 12], [0, 520], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const endFade = interpolate(frame, [51, 60], [1, 0.9], {
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
      <div
        style={{
          opacity: opacity * endFade,
          transform: `scale(${scale})`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 900,
            fontSize: 120,
            color: COLORS.white,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          20 €/mese
        </div>
        <div
          style={{
            height: 4,
            width: underline,
            backgroundColor: COLORS.green,
            borderRadius: 2,
            margin: '18px auto 0',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
