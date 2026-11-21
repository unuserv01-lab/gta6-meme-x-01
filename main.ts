// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The entry itself is the X post named in POST.json. This program does one
// small job: it hands that file to the grader by copying it from the
// repository root into the output directory. Nothing else is written, and
// nothing about the post is judged from what this program does.
//
// The two directories come from the environment so the same code works
// inside the grader's container and on a developer's machine:
//   MAKEFUN_BOT_DIR    - where POST.json lives (default /bot)
//   MAKEFUN_OUTPUT_DIR - where POST.json must land (default /output)
// A missing POST.json is the one failure this program can hit, so the
// error message names the exact path it looked for.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(`gta6-meme-x-01: could not hand in the entry — ${source} could not be copied to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
