'use strict';

const promisesAplusTests = require('promises-aplus-tests');
const adapter = require('.');

promisesAplusTests(adapter, function(err) {
  // All done; output is in the console. Or check `err` for number of failures.
  if (err) {
    console.log(err);
  }
});
