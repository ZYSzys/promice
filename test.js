'use strict';

const promisesAplusTests = require('promises-aplus-tests');
const adapter = require('./src/adapter');

promisesAplusTests(adapter, err => {
  // All done; output is in the console. Or check `err` for number of failures.
  if (err) {
    console.log(err);
  }
});
