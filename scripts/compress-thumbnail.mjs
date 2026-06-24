import sharp from 'sharp';
import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const thumbnailPath = path.join(__dirname, '../public/thumbnail.png');
const tempPath = thumbnailPath + '.tmp';

const { width, height, size } = await sharp(thumbnailPath).metadata();
const originalKb = Math.round((size ?? 0) / 1024);

await sharp(thumbnailPath)
    .resize(width && width > 1200 ? 1200 : width, height && height > 630 ? 630 : height, {
        fit: 'inside',
        withoutEnlargement: true,
    })
    .png({ quality: 80, compressionLevel: 9, palette: true })
    .toFile(tempPath);

const { size: compressedSize } = await sharp(tempPath).metadata();
const compressedKb = Math.round((compressedSize ?? 0) / 1024);

await sharp(tempPath).toFile(thumbnailPath);
await unlink(tempPath);

console.log(`Compressed thumbnail.png: ${originalKb}KB → ${compressedKb}KB`);
