# `perfbudget` cli

A CLI for creating and testing a performance budget.

## Installing

To install use npm to install globally:

```npm i performancebudget-io -g```

## Using `perfbudget`

The simplest way to use `perfbudget` is to run the CLI along with the file you want to run it against. e.g

```perfbudget```

### Additional Options:

`-v`, `--version` -  output the version number

`-c`, `--create` - create a new budget

`-o`, `--output <path>` - specify an output path to export as lighthouse budget (use with --create)

`-h`, `--help` - output usage information

`-d`, `--debug` - output extra debugging

## Contributing

To setup `perfbudget` for development you will need to:

1 - clone https://github.com/jonathan-fielding/perfbudget-cli.git

2 - run `npm i`

3 - run `npm run perfbudget -- <OPTIONS>` to run the development
