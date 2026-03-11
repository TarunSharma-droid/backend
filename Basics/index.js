// Building a Node.js HTTP server using Express. --> Node.js HTTP Server

require("dotenv").config(); // to use .env file // load variables from .env file


import express from "express" // importing express  to make a server
// We can also use another syntex --> const express = require('express')

const app = express() // express() creates an Express app --> This app will act as your server

const port = 3000
app.listen(3000)   // It means the server will run on port 3000 and listen for incoming requests from the client (browser).
// We access the server created above from the browser (client) using http://localhost:3000

app.get('/', (req, res) => {  
  res.send('Hello World!')
})
// It means when the browser accesses the server's home route (/) using http://localhost:3000/,
// it sends a GET request to the server, and the server responds with "Hello World!".

app.get('/twitter',(req,res) =>{  // get is a request . here made on the twitter route of the server using http://localhost:3000/twitter
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