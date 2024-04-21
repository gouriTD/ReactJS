import {emojipedia } from './emojipedia.js'

// In order to work with plain modules having some js files and then using ES6 modules, imports, we must make sure that the js file that we use should have a .js extension other wise we will get module not found error.
// Also we should see that while executing our code we are using the following command.
//  nodemon/node --experimental-specifier-resolution=node basicFunctions.js


const filtereddata = emojipedia.map((item)=>{ 
    return item.meaning.substring(0,100)+`\n`
})

console.log(filtereddata)