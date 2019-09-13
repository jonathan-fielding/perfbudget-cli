#!/usr/bin/env node

import * as commander from 'commander';
import create from './lib/create';
import display from './lib/display';
import output from './lib/output';

const program = new commander.Command();

// Inherit version from the package.json
program.version(require('../package.json').version);

// Add debug flag for debugging
program
  .option('-c, --create', 'create performance budget')
  .option('-o, --output <output_path>', 'path to output file')
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

if (program.output) {
  console.log(program.output);
}

// Add useful custom help text
if (program.create) {
  create().then((budget) =>{
    display(budget);

    if (program.output) {
      output(budget, program.output);
    }

    process.exit();
  });
}