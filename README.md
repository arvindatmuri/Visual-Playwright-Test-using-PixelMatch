# Visual Playwright Test using PixelMatch

Playwright can be used to automate interactions with a web application and capture screenshots of different states. By using libraries such as `pixelmatch`, you can then compare these screenshots to baseline images to identify any visual differences. 

Pixel-level comparison tools can help identify subtle rendering discrepancies that might not be apparent through other testing methods.

Different browsers and devices may render web pages slightly differently. By using `pixelmatch` with the power of Playwright, one can ensure that your application looks consistent across various browsers and devices.

Since Visual bugs or rendering issues in a web application may not always be easily detectable through traditional functional testing. This script/utility can be added into the regression suite and can be used as Visual regression which can be used to identify the unintended UI Changes early, Cross Browser/Cross device compatibility of the application's design.

This which reduce the manual effort just by writing few automated tests  that can quickly compare screenshots of the application before and after changes, saving time and effort in manual verification.

## Setup Instructions:
1.	.[Install Playwright](https://github.com/arvindatmuri/playwright-pixelmatch-technical-assessment/blob/main/docs/InstallingPlayright.md)
2.	[Install PixelMatch](https://github.com/arvindatmuri/playwright-pixelmatch-technical-assessment/blob/main/docs/InstallingPixelMatch.md)
3.	Run the Test and compare the data with screenshots