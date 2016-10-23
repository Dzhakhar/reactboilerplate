var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/src/client/public'));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(3000, function(){
	console.log("App listening on port 3000!");
})
