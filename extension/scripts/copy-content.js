// Script to copy content script to dist folder
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ensure dist exists
if (!existsSync('../dist')) {
  mkdirSync('../dist', { recursive: true });
}

// Copy content script
try {
  copyFileSync(
    'src/content/content.js',
    'dist/content.js'
  );
  console.log(' Copied content.js to dist/');
} catch (err) {
  console.error(' Error copying content.js:', err.message);
}