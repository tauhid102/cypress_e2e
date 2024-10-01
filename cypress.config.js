const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    url:"https://demo-opencart.com/index.php?route=account/register&language=en-gb"
  }
});
