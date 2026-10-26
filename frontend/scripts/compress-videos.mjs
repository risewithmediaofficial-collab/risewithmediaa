import ffmpeg from 'ffmpeg-static';
import { spawnSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoDir = path.resolve(__dirname, '../src/assets/clientvideos');
const outputDir = path.resolve(__dirname, '../src/assets/clientvideos_compressed');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));

console.log('Using ffmpeg at:', ffmpeg);

for (const file of files) {
  const inputPath = path.join(videoDir, file);
  const outputPath = path.join(outputDir, file);
  const originalSizeMb = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
  
  console.log(`\nCompressing: ${file} (Original: ${originalSizeMb} MB)...`);

  // Target high quality 1080p, CRF 26, capped bitrate so it stays safely under 20MB (< 25MB Cloudflare limit)
  // For reels (typically 1080x1920 portrait or 1920x1080 landscape)
  const args = [
    '-y',
    '-i', inputPath,
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '26',
    '-maxrate', '2500k',
    '-bufsize', '5000k',
    '-vf', 'scale=\'min(1080,iw)\':-2',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-movflags', '+faststart',
    outputPath
  ];

  const startTime = Date.now();
  const res = spawnSync(ffmpeg, args, { encoding: 'utf8', stdio: 'pipe' });

  if (res.status !== 0) {
    console.error(`Error compressing ${file}:`, res.stderr);
  } else {
    const newSizeMb = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`✓ Completed ${file}: ${originalSizeMb} MB -> ${newSizeMb} MB in ${elapsed}s`);
  }
}
