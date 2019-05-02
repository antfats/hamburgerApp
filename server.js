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

//SQL get name of burgers to post on page
burgerNames = function () {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT burgerName FROM freshBurger",function(err,res,fields){
            if (err) throw err;
            console.log(res);
        })
    })
}



//Route's
app.get("/", function (req, res) {
    res.render("index")
});
