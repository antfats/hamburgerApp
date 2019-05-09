var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var port = 3000;


//Route's
var routes = require("./controllers/burgers_controller");
app.use('/',routes);

app.listen(port, function () {
    console.log("The server is listening on http://localhost:" + port);

});