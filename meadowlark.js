// функция находится в отдельном файле в папке lib
var fortune = require('./lib/fortune.js');
var express = require('express');
var hbs = require("hbs");

var app = express();

app.set('port', process.env.PORT || 3000);

// устанавливаем путь к каталогу с частичными представлениями
hbs.registerPartials(__dirname + "/views/partials");

app.set('view engine', 'hbs');

//промежуточное ПО static
app.use(express.static(__dirname + '/public'));


app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

app.get("/", function (request, response) {

    response.render("home.hbs", {
        fortune: fortune.getFortune()
    });
});

app.get("/contact", function (request, response) {

    response.render("contact.hbs", {
        title: "Мои контакты",
        email: "baturaandrew@gmail.com",
        phone: "+375292637222",
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get("/about", function (request, response) {

    response.render("about.hbs");
});
app.get('/400', function (req, res) {
    res.render('400');
});
app.get('/500', function (req, res) {
    res.render('500');
});


app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

app.listen(app.get('port'), function () {
    console.log('Express runed on http://localhost:' +
        app.get('port') + '; press Ctrl+C to complete.');
});

