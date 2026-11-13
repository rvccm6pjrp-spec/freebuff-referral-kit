import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import path from 'node:path';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const STILLS = [
  {id: 'PREVIEW-01', frame: 20, file: 'MOT-01-PriceSlam.png'},
  {id: 'PREVIEW-02', frame: 50, file: 'MOT-02-CounterZero.png'},
  {id: 'PREVIEW-03', frame: 80, file: 'MOT-03-CounterStack.png'},
  {id: 'PREVIEW-04', frame: 12, file: 'MOT-04-WipeReveal.png'},
  {id: 'PREVIEW-05', frame: 60, file: 'MOT-05-CommandCounter.png'},
  {id: 'PREVIEW-06', frame: 60, file: 'MOT-06-BarFill.png'},
  {id: 'PROMO-Freebuff', frame: 215, file: 'PROMO-A-ricevuta.png'},
  {id: 'PROMO-Freebuff', frame: 235, file: 'PROMO-B-timbro.png'},
  {id: 'PROMO-Freebuff', frame: 700, file: 'PROMO-C-cta.png'},
];

const outDir = path.join(root, 'out', 'stills');
await fs.mkdir(outDir, {recursive: true});

console.log('Bundling...');
const serveUrl = await bundle({
  entryPoint: path.join(root, 'src', 'index.ts'),
});

for (const item of STILLS) {
  const composition = await selectComposition({
    serveUrl,
    id: item.id,
  });

  const output = path.join(outDir, item.file);

  await renderStill({
    composition,
    serveUrl,
    output,
    frame: item.frame,
  });

  console.log(`OK ${output}`);
}

console.log(`\nAnteprime in ${outDir}`);
