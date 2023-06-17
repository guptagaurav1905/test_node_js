// Path Module 

const path = require('path')

console.log(path.sep)

//
const filepath = path.join('/Content','Subcontent','test.txt')
console.log(filepath)

// last file niklane k lie 
const base = path.basename(filepath)
console.log(base)

// Absolute path 
const absolute = path.resolve(__dirname,'Content','Subcontent', 'test.txt')
console.log(absolute)
