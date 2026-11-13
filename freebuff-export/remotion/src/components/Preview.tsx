import React from 'react';
import {AbsoluteFill} from 'remotion';
import {COLORS} from '../theme';

export const Preview: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <AbsoluteFill style={{backgroundColor: COLORS.ink}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 50% 42%, rgba(124,255,107,0.12), transparent 62%)',
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
