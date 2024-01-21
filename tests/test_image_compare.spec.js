import { test, expect } from '@playwright/test';

/**
 * A test to capture the screenshot of the baseline image.
 * 
 * @param {page} page - The Playwright page object.
 */
test('Capture Screenshot of baseline', async ({ page }) => {
  // Navigate to the baseline image URL or file path
  await page.goto('file://<path_to_your_baseline_png>');
  
  // Capture the screenshot and assert it matches the baseline image
  await expect(page).toHaveScreenshot('Baseline.png');
});


/**
 * Test for checking the screenshot against the baseline image.
 * 
 * @param {page} page - The Playwright page object.
 */
test('Image Comparison', async ({ page }) => {
  // Navigate to the comparison image URL or file path
  await page.goto('file://<path_to_your_Comparison_png>');
  
  // Capture the screenshot and assert it matches the baseline image
  await expect(page).toHaveScreenshot("Baseline.png");
});


/**
 * Test for checking the screenshot against the baseline image with a maximum difference pixel ratio.
 * 
 * @param {page} page - The Playwright page object.
 */
test('Image Comparison with Ratio', async ({ page }) => {
  // Navigate to the comparison image URL or file path
  await page.goto('file://<path_to_your_Comparison_png>');
  
  // Capture the screenshot and assert it matches the baseline image within a specified maximum difference pixel ratio
  await expect(page).toHaveScreenshot("Baseline.png", { maxDiffPixelRatio: 0.05 });
});



/**
 * Test for checking the screenshot against the baseline image with a maximum difference in pixels.
 * 
 * @param {page} page - The Playwright page object.
 */
test('Image Comparison with pixels', async ({ page }) => {
  // Navigate to the comparison image URL or file path
  await page.goto('file://<path_to_your_Comparison_png>');
  
  // Capture the screenshot and assert it matches the baseline image within a specified maximum difference in pixels
  await expect(page).toHaveScreenshot("Baseline.png", { maxDiffPixels: 1000 });
});