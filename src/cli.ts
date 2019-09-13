#!/usr/bin/env node

import * as commander from 'commander';
import example from './lib/example'

const program = new commander.Command();

// Inherit version from the package.json
program.version(require('../package.json').version);

// Add debug flag for debugging
program
  .option('-o, --output', 'path to output file')
  .option('-d, --debug', 'output extra debugging')

// Add useful custom help text
program.on('--help', function(){
  console.log('')
  console.log('Examples:');
  console.log('  $ perfbudget --output budget.json');
});

// Allow commander to parse the args
program.parse(process.argv);

// For debugging purposes output the options and file path
if (program.debug) {
  console.log({
    ...program.opts(),
  });
}

console.log(example());