var express = require("express");
var app = express();
var PORT = 3000;
var date = new Date().toString();
var middleware = {
    userAuthentication: function(req, res, next) {
        console.log("Private Route Hit!");
        next();
    },
    logger: function(req, res, next) {
        console.log(req.method + " " + req.originalURL);
        next();
    },
    dateLogger: function(req, res, next) {
        console.log(date);
        next();
    }

};

app.use(middleware.dateLogger);


app.get('/about', middleware.userAuthentication, function(req, res) {
    res.send('Ayeeeee');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
    console.log("Started on " + PORT + "!");
});
