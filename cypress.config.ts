import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "junit",
  video: false,
  defaultCommandTimeout: 3000,
  watchForFileChanges: false,
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true
  },
  e2e: {
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {

    },
  },
});
