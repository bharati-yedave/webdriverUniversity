const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: true,
  },
  projectId: "qwaihk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPAttern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    viewportHeight: 660,
    viewportWidth: 1000,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoCompression: 32,
    video: false,
    videoUploadOnPasses: false,
    videosFolder: "cypress/video",
    baseUrl: "https://www.webdriveruniversity.com",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com",
      automationstore_homepage: "https://automationteststore.com/",
    },
  },
});
