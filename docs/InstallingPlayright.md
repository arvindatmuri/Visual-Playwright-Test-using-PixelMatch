# Playwright
  
Playwright is an automation library designed by Microsoft, stands out as an open-source solution catering to both browser testing and web scraping needs. Originally developed to streamline these processes, Playwright has evolved into a widely embraced tool, finding favor among a diverse community of programmers and web developers. Its versatile features and capabilities make it a valuable asset for those seeking efficient and effective solutions in the realms of browser automation.

Playwright gives the ability to automate browser tasks in **Chromium, Firefox and WebKit** using a single API. This makes it possible for developers to write dependable end-to-end tests that can be automated both in headless and non-headless modes.

With Playwright there are various options to choose different Programming Languages such as ***Java, Python or .NET*** as well but here for this project/Assessment we are using JavaScript.

## Getting Started

To get started with Playwright we may have to make sure we meet with few prerequisites and then we will look into installation steps. 

### Pre-requisites:

 -  A Desktop/Laptop with any majorly used OS such as ***Windows, Linux or Mac***(No Specific Configuration).
 - Any Supported Web Browser (**Chrome, Firefox, and WebKit** (used by Safari)).
 - An Internet Connection.
 - At least 5GB Disk Space.
 - **VSCode** or **WebStorm** or any IDE

### Installation:


 **Step 1**: Download Node JS

 - Node JS is an Asynchronous Event Driven Java Script Runtime Library
   and is designed to build Scalable apps.
 - Node JS can be downloaded from [NodeJS Home/Downloads Page](https://nodejs.org/en) (Installing an LTS version is recommended )
 - Once Downloaded it can be installed with very few and simple steps
 - Once Node JS is installed, Package also should contain the NPM Installed. NPM is the Node Package Manager which can be used to download the dependent libraries, use commands to build and run the scripts.
 - To verify the installation we can run the below commands to check if the installation is successful
 -   `node -v` which should return the version of the Node JS Package installed.
 -   `npm -v` which should return the version of the NPM installed.
 - For More information, refer to the [Node JS Docs](https://nodejs.org/docs/latest/api/) Page.
 - Also, please refer to this quick videos for Installing Node on [Windows](https://www.youtube.com/watch?v=06X51c6WHsQ)/[Ubuntu](https://www.youtube.com/watch?v=KtTe_ckT3iM)
   /[Mac OS](https://www.youtube.com/watch?v=Ue6g4udgbdI)

**Step 2**:  Install Playwright from Command Line or Terminal

 - Open the Command Line or PowerShell on Windows Machine or  Terminal for Linux or Mac Machine.
 - Once Node Installation is completed, Playwright can be installed using the below command.
 `npm init playwright@latest <project-name>`  
 This may take 5 to 10 mins to download all the dependencies and create a Project Folder with the name provided above.
  - Once this is executed, you will be presented with multiple prompts which outline how you would like to configure the project. These can be selected with the arrow keys or keyboard selections. Once you have selected all options, the project will be initialized.
	-   Choose between TypeScript or JavaScript (default is TypeScript)
	-   Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
	-   Add a GitHub Actions workflow to easily run tests on CI
	-   Install Playwright browsers (default is true)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/0*ajq82dvUTWQLXfmx)
 - After following these steps, once all the project has been configured with the desired inputs a folder is created with all the necessary files in it.  
![](https://miro.medium.com/v2/resize:fit:428/format:webp/0*PDH0hnXskqe7KlLC)
- There is a Folder structure created in which each folder and file has its own significance and will help us to start with the Project.
	- **.github\workflows\playwright.yml** : The `playwright.yml` is a YAML based Config files that can be used for CI/CD purposes when code is pushed/merged or any other purposes via Github Actions.
	- **node_modules** : This folder is automatically created when you install Node.js packages using npm. It contains the Playwright library and its dependencies.
	-	**tests** : The `tests` folder contains a basic example test(single) to help you get started with testing and also new tests can be created within this folder. All the tests should end with `.spec.js`
	-	**tests-examples** : This folder has an example test file which has sample tests to start with various scenarios to give more understanding and various good features scripted within. It includes tests designed to evaluate a to-do(Demo) app.
	-	**package.json** & **package-lock.json** : These files define your Node.js project and its dependencies. `package.json` includes metadata about the project, and `package-lock.json` locks down the versions of dependencies.
	-	**playwright.config.js** : If you have specific configuration settings for your Playwright project, you can create a configuration file named `playwright.config.js`. This file can include settings like browser types, launch options, context options and many more.