import ffmpeg from 'ffmpeg-static';
import { spawnSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoDir = path.resolve(__dirname, '../src/assets/clientvideos');
const outputDir = path.resolve(__dirname, '../src/assets/clientvideos_compressed');

const targets = [
  {
    file: 'WhatsApp Video 2026-10-26 at 2.01.33 PM.mp4',
    vBitrate: '800k',
    maxRate: '1000k',
    bufSize: '2000k',
  },
  {
    file: 'WhatsApp Video 2026-10-26 at 2.02.32 PM.mp4',
    vBitrate: '1100k',
    maxRate: '1350k',
    bufSize: '2700k',
  }
];

for (const t of targets) {
  const inputPath = path.join(videoDir, t.file);
  const outputPath = path.join(outputDir, t.file);
  console.log(`Re-encoding ${t.file} to target ~14-16 MB...`);

  const args = [
    '-y',
    '-i', inputPath,
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-b:v', t.vBitrate,
    '-maxrate', t.maxRate,
    '-bufsize', t.bufSize,
    '-vf', 'scale=\'min(1080,iw)\':-2',
    '-c:a', 'aac',
    '-b:a', '96k',
    '-movflags', '+faststart',
    outputPath
  ];

  const startTime = Date.now();
  const res = spawnSync(ffmpeg, args, { encoding: 'utf8', stdio: 'pipe' });

  if (res.status !== 0) {
    console.error(`Error compressing ${t.file}:`, res.stderr);
  } else {
    const newSizeMb = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`✓ Completed ${t.file} -> ${newSizeMb} MB in ${elapsed}s`);
  }
}
