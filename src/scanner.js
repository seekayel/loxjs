
const TOKEN_TYPE = {
  SINGLE: 'Single',
  COMPOUND: 'Compound',
  LITERAL: 'Literal',
  KEYWORD: 'Keyword',
  CONTROL: 'Control'
}
const SINGLE = TOKEN_TYPE.SINGLE
const COMPOUND = TOKEN_TYPE.COMPOUND
const LITERAL = TOKEN_TYPE.LITERAL
const KEYWORD = TOKEN_TYPE.KEYWORD
const CONTROL = TOKEN_TYPE.CONTROL

const TOKENS = [
  {name: 'Left Paren', type: SINGLE, char: '('},
  {name: 'Right Paren', type: SINGLE, char: ')'},
  {name: 'Left Brace', type: SINGLE, char: '{'},
  {name: 'Right Brace', type: SINGLE, char: '}'},
  {name: 'Comma', type: SINGLE, char: ','},
  {name: 'Dot', type: SINGLE, char: '.'},
  {name: 'Minus', type: SINGLE, char: '-'},
  {name: 'Plus', type: SINGLE, char: '+'},
  {name: 'Semicolon', type: SINGLE, char: ';'},
  {name: 'Slash', type: SINGLE, char: '\\'},
  {name: 'Star', type: SINGLE, char: '*'},
  {name: 'Bang', type: COMPOUND, char: '!',
    next: [
      {name: 'Bang Equal', char: '='},
    ]
  },
  {name: 'Equal', type: COMPOUND, char: '=',
    next: [
      {name: 'Double Equal', char: '='},
    ]
  },
  {name: 'Greater than', type: COMPOUND, char: '>',
    next: [
      {name: 'Greater than or equal', char: '='},
    ]
  },
  {name: 'Less than', type: COMPOUND, char: '<',
    next: [
      {name: 'Less than or equal', char: '='},
    ]
  }
]

function scan(str) {
  var s = ""
  var pos = 0;
  var tokens = []

  while(pos < str.length) {
    var c = str.charAt(pos)
    var t = TOKENS.find((e) => {
      return e.char == c
    })
    tokens.push(t)
    pos += 1
  }
  console.log(JSON.stringify(tokens,null,2))
}

scan('(){},.+-=<>;\\*!')
