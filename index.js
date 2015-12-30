#! /usr/bin/env node
var userArgs = process.argv.slice(2);

var branchName = userArgs.join(' ');

console.log(branchName.replace(/[\"\'\]\[\-\_]/gi,'').replace(/\s\s/g,' ').replace(/[\s]/g,'_').toLowerCase());