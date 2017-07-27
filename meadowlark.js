var fortune = require('./lib/fortune.js');
var express = require('express');
var hbs = require("hbs");

var app = express();

fs = require('fs');
app.set('port', process.env.PORT || 3000);

// устанавливаем путь к каталогу с частичными представлениями
hbs.registerPartials(__dirname + "/views/partials");
//промежуточное ПО static
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get("/", function (request, response) {

    response.render("home.hbs", { fortune: fortune.getFortune() });
});

app.get("/contact", function (request, response) {

    response.render("contact.hbs", {
        title: "Мои контакты",
        email: "baturaandrew@gmail.com",
        phone: "+375292637222"
    });
});

app.listen(app.get('port'), function () {
    console.log('Express runed on http://localhost:' +
        app.get('port') + '; press Ctrl+C to complete.');
});
