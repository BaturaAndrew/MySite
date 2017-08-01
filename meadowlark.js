// функция находится в отдельном файле в папке lib
var fortune = require('./lib/fortune.js');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
//промежуточное ПО static
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

app.get("/", function (request, response) {

    response.render('home.jade', {
        title: 'Главная страница',
        fortune: fortune.getFortune()
    });
});

app.get("/contact", function (request, response) {

    response.render("contact.jade", {
        title: "Мои контакты",
        email: "baturaandrew@gmail.com",
        phone: "+375292637222",
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get("/about", function (request, response) {
    response.render("about.jade",
        { title: "Common informaition" });
});
app.get('/400', function (req, res) {
    res.render('400.jade');
});
app.get('/500', function (req, res) {
    res.render('500.jade');
});

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river',
        { title: "Река Худ" });
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate',
        { title: "Групповой тур" });
});

app.listen(app.get('port'), function () {
    console.log('Express runed on http://localhost:' +
        app.get('port') + '; press Ctrl+C to complete.');
});

