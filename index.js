/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-range-input',

  included: function(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('vendor/rangeinput.js');
      app.import('vendor/rangeinput.css');
    }
  }
};
