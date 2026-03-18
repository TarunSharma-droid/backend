import dotenv from "dotenv"; 
dotenv.config(); // to use the environment variables from .env file we have to import the dotenv package and call the config() method on it.

import express from "express"; // Frstly we have to import the express in our project to handel HTTP request and responces.
// to use this syntax change "type" : commonjs to "type" : module in package.json file.

const app = express(); // creates an Express application --> This app is responsible for handling HTTP requests and responses.
// ye ek machine hai jo requests handle karegi aur responses bhejegi.


app.get("/", (req, res) => {  // get request is made on the home route of theserver ( which will be maintain by Express app )
  res.send("Hello World !! This is the home route of the server");
});
app.get('/about',(req,res) => {  // get request is made on the about route of the server 
    res.send('about is opened')
})
app.get('/login', (req,res) =>{  // get request is made on the login route of the server.
    res.send('enter your login details')
})

// NOTE : app.get se request execute nahi hoti sirf register hoti hai jese ki agar future me koi "/"" route pe GET request aaye, to ye function chalana"
// But if we want to initiate the request we have to use --> example http://localhost:3000/about or http://localhost:3000/login in the browser.
// This will initiate the request using the browser (client).


const PORT = process.env.PORT;
app.listen(PORT, () => { // to get the port number from .env file .
  console.log(`Server is running on the port ${PORT}`);
});
// app.listen() --> Node ko bolta hai "port 3000 pe server start karo"
// Ab server real me chalu hota hai aur wo requests sunne lagta hai.