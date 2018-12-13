var path = require("path");
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
        
    });

    app.use("*", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));

    });

 
}