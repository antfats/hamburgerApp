var express = require("express");
var exphbs = require("express-handlebars");



var app = express();

app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;
app.listen(port);

//Route's
app.get("/", function (req, res) {
    res.render("index")
});
