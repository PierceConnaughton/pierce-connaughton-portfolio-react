import sharp from 'sharp';
import { readFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const logoSvgPath = path.join(root, 'scripts', 'logo.svg');
const tabSvgPath = path.join(root, 'scripts', 'favicon-tab.svg');
const outDir = path.join(root, 'public');

const logoSvg = await readFile(logoSvgPath);
const tabSvg = await readFile(tabSvgPath);

const tabSizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
];

const logoSizes = [
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of tabSizes) {
    await sharp(tabSvg, { density: 512 })
        .resize(size, size, { kernel: sharp.kernel.lanczos3 })
        .png()
        .toFile(path.join(outDir, name));
}

for (const { name, size } of logoSizes) {
    await sharp(logoSvg, { density: 300 })
        .resize(size, size)
        .png()
        .toFile(path.join(outDir, name));
}

await sharp(path.join(outDir, 'favicon-32x32.png'))
    .toFile(path.join(outDir, 'favicon.ico'));

await copyFile(tabSvgPath, path.join(outDir, 'favicon.svg'));

console.log('Icons generated: tab-optimized favicon + detailed logo sizes');
