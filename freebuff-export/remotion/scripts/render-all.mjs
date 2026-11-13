import {bundle} from '@remotion/bundler';
import {renderMedia, selectComposition} from '@remotion/renderer';
import path from 'node:path';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const COMPOSITIONS = [
  {id: 'MOT-01-PriceSlam', file: 'F1-MOT-01.mov'},
  {id: 'MOT-02-CounterZero', file: 'F2-MOT-02.mov'},
  {id: 'MOT-03-CounterStack', file: 'F5-MOT-01.mov'},
  {id: 'MOT-04-WipeReveal', file: 'F4-MOT-01.mov'},
  {id: 'MOT-05-CommandCounter', file: 'F6-MOT-01.mov'},
  {id: 'MOT-06-BarFill', file: 'F8-MOT-01.mov'},
];

const outDir = path.join(root, 'out', 'motion');
await fs.mkdir(outDir, {recursive: true});

console.log('Bundling...');
const serveUrl = await bundle({
  entryPoint: path.join(root, 'src', 'index.ts'),
});

for (const item of COMPOSITIONS) {
  const composition = await selectComposition({
    serveUrl,
    id: item.id,
  });

  const outputLocation = path.join(outDir, item.file);

  console.log(`Rendering ${item.id} -> ${item.file}`);

  await renderMedia({
    composition,
    serveUrl,
    codec: 'prores',
    proResProfile: '4444',
    pixelFormat: 'yuva444p10le',
    imageFormat: 'png',
    outputLocation,
    overwrite: true,
  });

  console.log(`OK ${item.file}`);
}

console.log(`\nFatto. File in ${outDir}`);
