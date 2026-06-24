import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'projects');

const targets = [
    { url: 'https://www.wrestlegraph.com', file: 'wrestlegraph.png' },
    { url: 'https://www.pierce-connaughton-portfolio.ie', file: 'portfolio.png' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

for (const { url, file } of targets) {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
        path: path.join(outDir, file),
        type: 'png',
    });
    console.log(`Captured ${file} from ${url}`);
}

await browser.close();
