import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../theme';

export const WipeReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const x = interpolate(frame, [0, 12, 18], [-1080, 0, 1080], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: 'transparent', overflow: 'hidden'}}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          backgroundColor: COLORS.cream,
          borderRight: `4px solid ${COLORS.green}`,
          transform: `translateX(${x}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
