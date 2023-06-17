// Globals : accessible anywhere in my whole code
// __filename : file name 
// __dirname : path to current directory
// require : function to use modeule 
// module : info about current module


// Every file is a module in Node 

// Another way to describe function 
//   () => {}

const names = require('./4-firstModule')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

// console.log(data)


// sayHi(names.john)
// sayHi(names.peter)
// sayHi('kiran')

