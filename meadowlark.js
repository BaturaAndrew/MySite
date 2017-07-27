var express = require('express');
var hbs = require("hbs");

var app = express();

var fortunes = [
"Победи свои страхи, или они победят тебя.",
"Рекам нужны истоки.",
"Не бойся неведомого.",
"Тебя ждет приятный сюрприз.",
"Будь проще везде, где только можно.",
];

fs = require('fs');
app.set('port', process.env.PORT || 3000);


// устанавливаем путь к каталогу с частичными представлениями
hbs.registerPartials(__dirname + "/views/partials");
//промежуточное ПО static
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get("/", function(request, response){
     
	var randomFortune =
fortunes[Math.floor(Math.random() * fortunes.length)];
response.render("home.hbs", { fortune: randomFortune });
});

app.get("/contact", function(request, response){
     
   response.render("contact.hbs", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
});

// app.get('/', function(req, res){
// 	res.type('text/plain');
// 	res.send('Meadowlark Travel');
// });

// app.get('/', function(req, res) {
// res.render('home');
// });
// app.get('/about', function(req, res) {
// res.render('about');
// });
// // ���������� ���������� 404 (������������� ��)
// app.use(function(req, res, next){
// res.status(404);
// res.render('404');
// });
// // ���������� ������ 500 (������������� ��)
// app.use(function(err, req, res, next){
// console.error(err.stack);
// res.status(500);
// res.render('500');
// });
app.listen(app.get('port'), function(){
	console.log( 'Express runed on http://localhost:' +
	app.get('port') + '; press Ctrl+C to complete.' );
});
