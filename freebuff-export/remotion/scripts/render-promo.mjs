import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import path from 'node:path';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const outDir = path.join(root, 'out', 'promo');
await fs.mkdir(outDir, {recursive: true});

console.log('Bundling...');
const serveUrl = await bundle({
  entryPoint: path.join(root, 'src', 'index.ts'),
});

const composition = await selectComposition({
  serveUrl,
  id: 'PROMO-Freebuff',
});

const outputLocation = path.join(outDir, 'FREEBUFF-promo-v01.mp4');

console.log('Rendering promo...');
await renderMedia({
  composition,
  serveUrl,
  codec: 'h264',
  pixelFormat: 'yuv420p',
  crf: 18,
  outputLocation,
  overwrite: true,
});

console.log(`OK ${outputLocation}`);
