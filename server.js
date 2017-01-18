var express = require("express");
var app = express();
var PORT = 3000;
var middleware = require("./middleware.js");

app.use(middleware.dateLogger);


app.get('/about', middleware.userAuthentication, function(req, res) {
    res.send('Ayeeeee');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("Started on " + PORT + "!");
});
