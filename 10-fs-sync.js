const {readFileSync , writeFileSync } = require('fs')
console.log('start')
// Line 1 and below are same 
//const fs = require.fs
//fs.readFileSync

const first = readFileSync('./Content/first.txt' , 'utf8' )
const second = readFileSync('./Content/second.txt' , 'utf8' )
//console.log(first , second)

//writeFileSync('./Content/result-sync.txt', `Here is the result of : ${first} , ${second}`)


// for append 
writeFileSync('./Content/result-sync.txt',
 `Here is the result of : ${first} , ${second}`,{flag : 'a'})

 console.log('We are done')
 console.log('start again')