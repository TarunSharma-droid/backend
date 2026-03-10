// Building a Node.js HTTP server using Express. --> Node.js HTTP Server

require("dotenv").config(); // to use .env file // load variables from .env file


import express from "express"
// We can also use another syntex --> const express = require('express')

const app = express() // express() creates an Express app --> This app will act as your server

const port = 3000
app.listen(3000)   // It means the server will run on port 3000 and listen for incoming requests from the client (browser).
// We open the server in the browser using http://localhost:3000

app.get('/', (req, res) => { // get is a request . here made on the home route by client (browser) --> using http://localhost:3000/
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{  // get is a request . here made on the twitter route
    res.send('twitter is opened')
})
app.get ('/login', (req,res) =>{
    res.send('<h1>please consult Mr.Tarun for all your problems</h1> ')
})

app.get ('/tarun', (req,res) =>{
    res.send('<h2>Your one stop solution for all your utilities and accomodation needs </h2> ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Hello love you ${port}`) // It is still getting the value of port from the same file only i.e 3000
})
// Use this if you want to imoprt the value of port from the .env file

// const port = process.env.PORT
// app.listen(port, () => {
//   console.log(`Hello love you ${port}`) 
// })

// now this is completely ready for the deployment
// hello