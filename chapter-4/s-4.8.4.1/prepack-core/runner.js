var { default: execute } = require('../prepack-core/prepack.min.js');
var { readFileSync } = require('fs');

// arguments parser
var [,,...[filename, ...args]] = process.argv;

// execute only
execute(readFileSync(filename, 'utf-8'));