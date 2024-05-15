// _________________________________________________________________________________________________________________
//    Q1:    Create a simple Node.js application that prints 'Hello, World!' to the console.
//    ans:   console.log("Hello World")  //    JUST RUN THE COMMAND "NODE FILE NAME" HERE IT IS NODE app.js

// _________________________________________________________________________________________________________________
//    Q2:   Create a Node.js application that takes two numbers as command-line arguments and prints their sum.
//    ans:  const num2 = parseFloat(process.argv[3]);
//    ans:  const num1 = parseFloat(process.argv[2]);
//    ans:  const num3 = parseFloat(process.argv[4])
//    ans:  console.log("Sum:", num1 + num2 + num3);

// _________________________________________________________________________________________________________________
//    Q3:    Create a function that returns random number and export that function and use that function in this file
//    STEP1: Create a function named utils.js and create a function named generateRandomPassword and write the logic there and export that function in node.js we can export a function. Like this
//           module.exports(place function name here..) 
//    STEP2: const generateRandomPassword = require('./utils')
//           console.log(`The random number is , ${generateRandomPassword()}`)

// _________________________________________________________________________________________________________________
//     Q4:   WHAT IS ESMODULE IN NODE.JS
//    ans:   ES modules in Node.js allow you to use modern ECMAScript module syntax directly without transpilation. They're enabled by using `.mjs` file extension or `"type": "module"` in `package.json`. They offer benefits like improved static analysis and better tree-shaking.

// _________________________________________________________________________________________________________________
//     Q5:   Create a routing system in express js?
//    ans:   Step1: Firstly I just created a file and named it server.js
//           Step2: Then import http from http,
//                  and we have created a file named .env and create a PORT address there like '8080'
//                  and we will use the port address on the like const PORT = process.env.PORT
//                  and then create a variable named server and store the value of http.createServer((req, res)=> {
//                  and when do 
//                  if(req.url === '/') {
//                  res.writeHead(200, 'content-type': 'text-html') 
//                  res.end("<h2>This is from homepage</h2>")
//                  } else if (req.url === '/about){
//                  res.writeHead(200, 'content-type': 'text-html') 
//                  res.end("<h2>This is from about page</h2>")
//                  }
//                  else {
//                  res.writeHead(404, 'content-type': 'text-plain') 
//                  res.end("<h2>Page not found</h2>")
//                  }
//                  server.listen(PORT, ()=> {
//                  "we can give some message her like" server running in ${PORT}
//                  })
// })
// ******************************************************************************************************************
// This is how we create a simple routing in express server
// __________________________________________________________________________________________________________________
// 
//     Q6:   What are the types of mainly used request methods?
//    and:   They are 'GET' and 'POST'
