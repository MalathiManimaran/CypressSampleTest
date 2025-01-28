const { defineConfig } = require('cypress');
//const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 800,
  viewportWidth: 1200,
  e2e: {
   // watchForFileChanges: false, to disable watching for file changes and reload the test runner
    setupNodeEvents(on, config) {
      // implement node event listeners here
  //  on('task', { downloadFile });
    },
   
  },
});
