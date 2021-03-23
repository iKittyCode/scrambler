
var scramby = require('scramby')
const scrambler = scramby('222')
 
const  state  = scrambler.getRandomScramble().scrambleString
console.log(state)
