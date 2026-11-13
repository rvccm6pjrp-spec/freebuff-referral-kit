import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONT_MONO, FONT_TITLE} from '../theme';

const TRACK_WIDTH = 800;
const TARGET = 47;
const TOTAL = 600;

export const BarFill: React.FC = () => {
  const frame = useCurrentFrame();

  const fill = interpolate(frame, [0, 36], [0, (TRACK_WIDTH * TARGET) / TOTAL], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const count = Math.round(
    interpolate(frame, [0, 36], [0, TARGET], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: 'clamp',
    })
  );

  const labelOpacity = interpolate(frame, [36, 44], [0, 1], {
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
      <div style={{width: TRACK_WIDTH}}>
        <div
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 900,
            fontSize: 96,
            color: COLORS.white,
            opacity: labelOpacity,
            marginBottom: 24,
            letterSpacing: -2,
          }}
        >
          {TARGET}/{TOTAL}
        </div>
        <div
          style={{
            width: '100%',
            height: 24,
            borderRadius: 12,
            backgroundColor: 'rgba(242,235,221,0.25)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: fill,
              height: '100%',
              borderRadius: 12,
              backgroundColor: COLORS.green,
            }}
          />
        </div>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontWeight: 700,
            fontSize: 64,
            color: COLORS.green,
            marginTop: 20,
            textAlign: 'right',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {count}
        </div>
      </div>
    </AbsoluteFill>
  );
};
