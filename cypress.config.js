const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r5womd",

  "defaultCommandTimeout": 50000,
  "pageLoadTimeout": 30000,
  viewportWidth: 1740,
  viewportHeight: 1200,
  e2e: {
    baseUrl: "https://staging.healthforcehub.link/login",
    "screenshots": false,
    screenshotOnRunFailure: false,
    "video": false, // Set this to true to enable video recording
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Stop video recording at a specific point in the test
      on('task', {
        stopVideo() {
          return cy.video().then((details) => {
            // The video recording will be stopped, and details can be logged or processed as needed
            console.log('Video Recording Stopped:', details);
          });
        },
      });
    },
  },
});
