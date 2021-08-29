const fs = require('fs')
const path = require('path')
const readline = require('readline')

function run(code) {
  console.log(code)
}

function runFile(name) {
  const file = fs.readFileSync(path.resolve(__dirname,name))
  run(file.toString())
}

function runREPL() {
  const repl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    removeHistoryDuplicates: true,
    tabSize: 2,
    terminal: true
  })
  repl.prompt();

  repl.on('line', line => {
    run(line.trim())
    repl.prompt()
  }).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
  });
}


function main(argv) {
  const length = argv.length
  if (length > 3) {
    console.log('Incorrect number of arguments.\nUsage: lox [filename]')
    process.exit(64)
  } else if (length === 3) {
    const fileName = argv[2]
    // console.log(fileName)
    runFile(fileName)
  } else {
    runREPL()
  }
}

// TODO handle being run either via `lox [fileName]`, `npx lox`, `bin/lox [fileName]` or `yarn run lox [fileName]`
main(process.argv)

