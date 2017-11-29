var http = require('http');
var express = require('express');
var app = express();


app.get("/Chats/:user/:conversation", function (require, response) {
const User = require.params.user;
const Conversation = require.params.conversation;

// will need to pull from database 
});

app.post("/Chatting/:conversation/:user/:message", function (require, response) {
const Conversation = require.params.conversation;
const User = require.params.user;
const Message = require.params.message;
// will need to push to database  
});


app.get('/api', function (require, response) {  
      response.send("Get off my api");
});

http.createServer(app).listen(3000, function() {
 	console.log("Server is running");
});


// get = read
// post = create
// post = update
// delete = delete
