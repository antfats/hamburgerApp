var express = require("express");
var exphbs = require("express-handlebars");
var sql = require("mysql");

var connection = sql.createConnection({
    host: "localhost",
    user: "root",
    port: '3306',
    password: "Tdaca12-23*",
    database: "burgers_db",

})

var app = express();

app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;
app.listen(port);

//Route's
app.get("/", function (req, res) {
    res.render("index")
});
