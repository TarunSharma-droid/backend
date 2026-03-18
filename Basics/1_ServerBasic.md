// SERVER → It is a computer, machine, or program on which a client makes a request, and the server sends
// a response according to that request. A server is usually connected to a database where it searches or stores data.

//                   Client (User/App)
//                        ↓ request
//                      Server
//                        ↓ fetch
//                     Database
//                        ↓ response
//                  Client gets the data




// Node.js provides the server environment and creates the HTTP server.
// Express is a framework built on top of Node.js that helps manage the server easily.
// We manage server by creating an Express app using --> const app = express().

// The Express app is responsible for handling HTTP requests and responses.
// It receives HTTP requests from the client (browser/app),
// processes them using backend logic running on the Node.js server,
// and sends the appropriate HTTP response back to the client.

// If we do not create an Express application ---> (const app = express()),
// then Express cannot handle requests and responses because there is
// no application instance to manage routes and server behavior.

// In simple terms:
// Node.js → creates and runs the server environment
// Express → manages requests, routes, and responses on that server using the app object
// This allows the client and server to communicate and exchange data.




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
    