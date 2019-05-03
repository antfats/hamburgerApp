
var sql = require("mysql");

var server = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tdaca12-23*",
    database: "burger_db",
    port: process.env.PORT || 8080
});
server.connect(function (err) {
    if (err) throw err;

});

module.exports = server;
