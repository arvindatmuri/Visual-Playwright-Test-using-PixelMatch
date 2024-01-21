# Visual Playwright Test using PixelMatch

Playwright can be used to automate interactions with a web application and capture screenshots of different states. By using libraries such as `pixelmatch`, you can then compare these screenshots to baseline images to identify any visual differences. 

Pixel-level comparison tools can help identify subtle rendering discrepancies that might not be apparent through other testing methods.

Different browsers and devices may render web pages slightly differently. By using `pixelmatch` with the power of Playwright, one can ensure that your application looks consistent across various browsers and devices.

Since Visual bugs or rendering issues in a web application may not always be easily detectable through traditional functional testing. This script/utility can be added into the regression suite and can be used as Visual regression which can be used to identify the unintended UI Changes early, Cross Browser/Cross device compatibility of the application's design.

This which reduce the manual effort just by writing few automated tests  that can quickly compare screenshots of the application before and after changes, saving time and effort in manual verification.

## Setup Instructions:
1.	[Install Playwright](https://github.com/arvindatmuri/playwright-pixelmatch-technical-assessment/blob/main/docs/InstallingPlayright.md)
2.	[Install PixelMatch](https://github.com/arvindatmuri/playwright-pixelmatch-technical-assessment/blob/main/docs/InstallingPixelMatch.md)

## Tests
In this Project are 4 tests written in 	`tests\test_image_compare.spec.js`

 1. **Capture Screenshot of baseline**: This will just take a fresh screenshot of baseline image if it doesn't exist. This test may ***fail*** if the baseline file doesn't exist. Rerunning the test again will fix the error.
 2. **Image Comparison** :  This is a test using Playwright to capture a screenshot and compare it against a baseline image. It navigates to a URL or file path for the comparison image, captures the screenshot, and then asserts that the captured screenshot matches the baseline image. If the assertion fails, it will report a diff image. The test uses the Playwright page object for interacting with the browser. 
 3. **Image Comparision with ratio**: This is a test using Playwright to capture a screenshot and compare it against a baseline image, with the added requirement of a maximum difference pixel ratio. 
It navigates to a URL or file path for the comparison image, captures the screenshot, and then asserts that the captured screenshot matches the baseline image within a specified maximum difference pixel ratio. 
The `maxDiffPixelRatio: 0.05` parameter sets the maximum allowed difference in pixels between the two images. If the assertion fails, it will report a diff image.
4.	**Image Comparison with pixels**: This is a similar test as above but with the added requirement of a maximum difference in pixels.
It navigates to a URL or file path for the comparison image, captures the screenshot, and then asserts that the captured screenshot matches the baseline image within a specified maximum difference in pixels. 
The `maxDiffPixels: 1000` parameter sets the maximum allowed difference in pixels between the two images. If the assertion fails, it will report a diff image. The test uses the Playwright page object for interacting with the browser, which is provided as a parameter to the test function.


### Execution:

Open command line and then navigate to the Project folder, 

***Note:*** Before executing we need to make sure the ***local path for baseline and comparison images are being updated*** in `tests\test_image_compare.spec.js`

![enter image description here](https://i.imgur.com/w1JP5UI.png)
![enter image description here](https://i.imgur.com/lwtvl9O.png)

Then we just have to execute the below command
`npm playwright test`

This will ideally run the tests on all the browsers based on the configuration set in the `playwright.config.js` under the `projects`.

## Output
Once the test has been executed, One notable feature of Playwright's reporting is its ability to include image comparisons with an inbuilt diff checker. This goes beyond traditional text-based reporting, allowing for a more thorough analysis of visual elements on web pages. Visual regressions, where changes in the user interface might not be immediately apparent in textual comparisons, can be efficiently identified through this image comparison feature.

The automatic generation of reports is a key advantage, saving time and effort for developers and testers. The reports serve as a valuable resource for understanding the intricacies of the test execution, making it easier to pinpoint any issues that may have arisen during the automated testing process.

We can access the report directly by running the below command
`npx playwright show-report`

#### Overall Test Execution Report
![Overall Test Execution Report](https://i.imgur.com/EH8E6f9.png)

#### Detailed Error Log
![Detailed Error Log](https://i.imgur.com/2kPocjz.png)

#### Inbuilt Image Diff Checker with various Options to debug
![Inbuilt Image Diff Checker with various Options](https://i.imgur.com/ulPnRJq.png)

There are various reports but html report is best among all of them which clearly shows the user the overall status of the test with minute detail included.

The type of report to be generated can be configured by changing or adding other types of reports to `reporter` variable within `playwright.config.js`  

This will also generate the screenshots under `test-results` folder post execution under the test name with ***actual, diff and expected images***. something as shown below

![enter image description here](https://i.imgur.com/jUaiT35.png)


This Project is part of [Technical Assessment](https://github.com/arvindatmuri/Visual-Playwright-Test-using-PixelMatch/blob/main/docs/TechnicalAssessment.md)