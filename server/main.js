var express = require('express'),
	app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../.tmp'));

app.get('/', function(req, res) {
	res.render('./../app/index', {});
});

app.listen(7777, function(){
	console.log('Express running on port: 7777');
});