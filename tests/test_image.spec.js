import { test } from '@playwright/test';
const { chromium } = require('playwright');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');
import Handlebars from 'handlebars';

/**
 * Test for comparing two images and generating a report with mismatched pixels using Playwright.
 */
test('Image Compare with Pixel Match explicit', async () => {
  // Launch a new browser instance
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL or perform any actions to generate screenshots
  await page.goto('file://<path_to_your_baseline_png>');
  await page.screenshot({ path: 'ss1.png' });

  // Perform some actions or navigate to another page
  await page.goto('file://<path_to_your_Comparision_png>');
  await page.screenshot({ path: 'ss2.png' });

  // Close the browser
  await browser.close();

  // Converting image into Image array Data
  const img1 = PNG.sync.read(fs.readFileSync('ss1.png'));
  const img2 = PNG.sync.read(fs.readFileSync('ss2.png'));
  const { width, height } = img1;

  // Create a new PNG object for storing the difference
  const diff = new PNG({ width, height });

  //  
  const mismatchedPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
  fs.writeFileSync('diff.png', PNG.sync.write(diff));
  
  console.log('Mismatched pixels: ${mismatchedPixels}');
  console.log('Image comparison completed.');

  // Generate HTML report using Handlebars template
  const template = fs.readFileSync('report-template.hbs', 'utf-8');
  const templateFn = Handlebars.compile(template);
  const reportData = {
    screenshot1: fs.readFileSync('ss1.png', 'base64'),
    screenshot2: fs.readFileSync('ss2.png', 'base64'),
    diff: fs.readFileSync('diff.png', 'base64'),
    mismatchedPixels,
  };
  const html = templateFn(reportData);
  fs.writeFileSync('report.html', html);
});
