import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {loadFont as loadMono} from '@remotion/google-fonts/JetBrainsMono';

const inter = loadInter('normal', {
  weights: ['700', '900'],
  subsets: ['latin'],
});

const mono = loadMono('normal', {
  weights: ['400', '700'],
  subsets: ['latin'],
});

export const FONT_TITLE = inter.fontFamily;
export const FONT_MONO = mono.fontFamily;

export const COLORS = {
  ink: '#0B0F0E',
  cream: '#F2EBDD',
  green: '#7CFF6B',
  red: '#FF5C4D',
  white: '#FFFFFF',
} as const;

export const SIZE = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;
