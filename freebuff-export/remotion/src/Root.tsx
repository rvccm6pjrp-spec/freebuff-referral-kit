import React from 'react';
import {Composition} from 'remotion';
import {SIZE} from './theme';
import {Preview} from './components/Preview';
import {PriceSlam} from './compositions/PriceSlam';
import {CounterZero} from './compositions/CounterZero';
import {CounterStack} from './compositions/CounterStack';
import {WipeReveal} from './compositions/WipeReveal';
import {CommandCounter} from './compositions/CommandCounter';
import {BarFill} from './compositions/BarFill';
import {PromoFreebuff} from './compositions/PromoFreebuff';

const base = {
  fps: SIZE.fps,
  width: SIZE.width,
  height: SIZE.height,
};

const withPreview = (Component: React.FC) => {
  const Wrapped: React.FC = () => (
    <Preview>
      <Component />
    </Preview>
  );
  return Wrapped;
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MOT-01-PriceSlam"
        component={PriceSlam}
        durationInFrames={60}
        {...base}
      />
      <Composition
        id="MOT-02-CounterZero"
        component={CounterZero}
        durationInFrames={60}
        {...base}
      />
      <Composition
        id="MOT-03-CounterStack"
        component={CounterStack}
        durationInFrames={90}
        {...base}
      />
      <Composition
        id="MOT-04-WipeReveal"
        component={WipeReveal}
        durationInFrames={18}
        {...base}
      />
      <Composition
        id="MOT-05-CommandCounter"
        component={CommandCounter}
        durationInFrames={90}
        {...base}
      />
      <Composition
        id="MOT-06-BarFill"
        component={BarFill}
        durationInFrames={90}
        {...base}
      />

      <Composition
        id="PROMO-Freebuff"
        component={PromoFreebuff}
        durationInFrames={780}
        {...base}
      />

      <Composition
        id="PREVIEW-01"
        component={withPreview(PriceSlam)}
        durationInFrames={60}
        {...base}
      />
      <Composition
        id="PREVIEW-02"
        component={withPreview(CounterZero)}
        durationInFrames={60}
        {...base}
      />
      <Composition
        id="PREVIEW-03"
        component={withPreview(CounterStack)}
        durationInFrames={90}
        {...base}
      />
      <Composition
        id="PREVIEW-04"
        component={withPreview(WipeReveal)}
        durationInFrames={18}
        {...base}
      />
      <Composition
        id="PREVIEW-05"
        component={withPreview(CommandCounter)}
        durationInFrames={90}
        {...base}
      />
      <Composition
        id="PREVIEW-06"
        component={withPreview(BarFill)}
        durationInFrames={90}
        {...base}
      />
    </>
  );
};
