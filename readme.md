# Image Resizer Electron App

This is an Electron application that resizes images. The project now includes end-to-end (E2E) testing using WebdriverIO (WDIO) and unit testing using Mocha and Chai.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/thanujnayaka777/image-resizer-electron.git
   cd image-resizer-electron
   ```

2. Install the dependencies: npm install.

3. Running the Application: npm start.

4. Run unit tests:npm run test:unit.

5. End-to-End (E2E) Tests
   1.Install WDIO dependencies:npm install --save-dev chai @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/sync wdio-electron-service mocha esm esm-loader

6. Run E2E tests : npx wdio wdio.conf.js

***Project Structure**
1. src/: Source files of the application
2. test/unit/: Unit test files
3. test/specs/: E2E test files

**Test Coverage**
Unit Tests
1. Main Process:
   Checks if a browser window is created.
   Ensures the index.html file is loade
   
**E2E Tests**
1. Application Title:

   Opens the app and verifies the title.

2. Main Page Elements:

   Checks the presence of main UI elements.

3. Image Resizing:

   Performs an image resize operation and verifies the success message.


### Result details
("https://docs.google.com/spreadsheets/d/1ilemxPjJIpILbiD3LlEYaCxiTqxMFfZv/edit?usp=sharing&ouid=114789124499167497159&rtpof=true&sd=true")
