
// SERVER → It is a computer, machine, or program on which a client makes a request, and the server sends
// a response according to that request. A server is usually connected to a database where it searches or stores data.

//                   Client (User/App)
//                        ↓ request
//                      Server
//                        ↓ fetch
//                     Database
//                        ↓ response
//                  Client gets the data

// Express is a package which is use to make server () 
// and to establish connection between the client side and the server. It helps your product 
// to talk to the server and send data back to the server.


// Express receives the "request" from the client and give it to server (process it on server : backend)
// and brings back the "response" to client side.
// That means Express handels the HTTP request and response.

//    Actually Express se hi API banayi jati hai.
--->  API ek address hai jahan request bheji jati hai.
--->  Express API ko implement karta hai.

//          app.get("/users", (req, res) => {
//             const users = ["Tarun", "Rahul", "Aman"];
//             res.json(users);
//             });

    Express → request handle kar raha hai

    /users      API endpoint hai
    pp.get()	Express route
    req	        client request
    res        	server response
    