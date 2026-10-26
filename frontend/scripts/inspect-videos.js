const ffmpeg = require('ffmpeg-static');
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const videoDir = path.resolve(__dirname, '../src/assets/clientvideos');
const files = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));

console.log('Using ffmpeg at:', ffmpeg);
for (const file of files) {
  const filePath = path.join(videoDir, file);
  const sizeMb = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
  const res = spawnSync(ffmpeg, ['-i', filePath], { encoding: 'utf8' });
  const lines = (res.stderr || '').split('\n').filter(l => l.includes('Stream') || l.includes('Duration'));
  console.log(`\n=== ${file} (${sizeMb} MB) ===`);
  lines.forEach(l => console.log('  ', l.trim()));
}
