var express = require('express');
var app = express();
// ”становка механизма представлени€ handlebars
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

fs = require('fs');
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});
app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});

// пользовательска€ страница 404
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	serveStaticFile(res, '404.jpg', 'image/jpeg');
	res.send('404 Ч Not found');
});
// пользовательска€ страница 500
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 Ч Server error');
});
app.listen(app.get('port'), function(){
	console.log( 'Express runed on http://localhost:' +
	app.get('port') + '; press Ctrl+C to complete.' );
});
function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function(err,data) {
		if(!err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('500 - Internal Error');
			} else {
			res.writeHead(responseCode, { 'Content-Type': contentType });
			res.send(data);
		}
	});
}