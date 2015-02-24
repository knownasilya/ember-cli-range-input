/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-range-input',

  included: function(app) {
    app.import('vendor/rangeinput.js');
    app.import('vendor/rangeinput.css');
  }
};
