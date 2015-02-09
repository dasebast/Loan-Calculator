var express = require('express');
var app = express();
var port = 9001;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log("now listening on port " + port);
});

app.get('/interest_rate', function(req, res) {
	var rando = Math.floor(Math.random()*2000) / 100;
	res.json(rando);
});