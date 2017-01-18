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

module.exports = middleware;
