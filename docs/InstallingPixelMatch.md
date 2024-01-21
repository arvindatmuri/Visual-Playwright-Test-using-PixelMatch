# PixelMatch

PixelMatch is a Javascript library that was specifically designed to be the smallest, simplest, and fastest tool for comparing images at the pixel level. Its primary use case is in testing scenarios where screenshots need to be compared.

Key features of pixelmatch include accurate detection of anti-aliased pixels and the use of perceptual color difference metrics. Anti-aliased pixels are those that have a semi-transparent edge, often found in images to smooth transitions between colors. The library is adept at identifying such pixels, ensuring precise image comparisons.

Pixelmatch draws inspiration from two other image comparison libraries, namely Resemble.js and Blink-diff. However, it distinguishes itself by being extremely lightweight, consisting of only around 150 lines of code.

Moreover, pixelmatch is designed to work with raw typed arrays of image data, allowing it to be exceptionally fast in its execution. This feature makes it suitable for deployment in different environments, whether it be on the server-side (Node.js) or in web browsers.

### How to Install PixelMatch?

Installation of this library is pretty easy and can be installed just by executing the below command,

`npm install pixelmatch`

This library has no external dependencies, making it a self-contained solution that can be easily integrated into various environments. This lack of dependencies contributes to its speed and versatility.

### Inside PixelMatch

We have a method named `pixelmatch` which takes various arguments as shown below:

` pixelmatch(img1, img2, output, width, height[, options])`

- `img1`, `img2` — Image data of the images to compare (`Buffer`, `Uint8Array` or `Uint8ClampedArray`). 
**Note:** image dimensions must be equal.
- `output` — Image data to write the diff to, or `null` if don't need a diff image.
- `width`, `height` — Width and height of the images. Note that _all three images_ need to have the same dimensions.

`options` is an object literal with the following properties:

- `threshold` — Matching threshold, ranges from `0` to `1`. Smaller values make the comparison more sensitive. `0.1` by default.
- `includeAA` — If `true`, disables detecting and ignoring anti-aliased pixels. `false` by default.
- `alpha` — Blending factor of unchanged pixels in the diff output. Ranges from `0` for pure white to `1` for original brightness. `0.1` by default.
- `aaColor` — The color of anti-aliased pixels in the diff output in `[R, G, B]` format. `[255, 255, 0]` by default.
- `diffColor` — The color of differing pixels in the diff output in `[R, G, B]` format. `[255, 0, 0]` by default.
- `diffColorAlt` — An alternative color to use for dark on light differences to differentiate between "added" and "removed" parts. If not provided, all differing pixels use the color specified by `diffColor`. `null` by default.
- `diffMask` — Draw the diff over a transparent background (a mask), rather than over the original image. Will not draw anti-aliased pixels (if detected).

Compares two images, writes the output diff and returns the number of mismatched pixels.
