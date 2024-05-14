//    Q1:    Create a simple Node.js application that prints 'Hello, World!' to the console.
//    ans:   console.log("Hello World")  //    JUST RUN THE COMMAND "NODE FILE NAME" HERE IT IS NODE app.js


//    Q2:   Create a Node.js application that takes two numbers as command-line arguments and prints their sum.
//    ans:  const num2 = parseFloat(process.argv[3]);
//    ans:  const num1 = parseFloat(process.argv[2]);
//    ans:  const num3 = parseFloat(process.argv[4])
//    ans:  console.log("Sum:", num1 + num2 + num3);

//    Q3:    Create a function that returns random number and export that function and use that function in this file
//    STEP1: Create a function named utils.js and create a function named generateRandomPassword and write the logic there and export that function in node.js we can export a function. Like this
//           module.exports(place function name here..) 

//    STEP2: const generateRandomPassword = require('./utils')
//           console.log(`The random number is , ${generateRandomPassword()}`)

//    WHAT IS ESMODULE IN NODE.JS
//    ES modules in Node.js allow you to use modern ECMAScript module syntax directly without transpilation. They're enabled by using `.mjs` file extension or `"type": "module"` in `package.json`. They offer benefits like improved static analysis and better tree-shaking.