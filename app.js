// We can also install package as a local dependency that is we can only use in a particular project.

// npm i <packagename>

// Globally 
//sudo install -g <packagename>

// packaage.json : store important info about project

// npm init -y


// lodash is a utility libraray
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)