
var sql = require("mysql");

var server = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tdaca12-23*",
    database: "burgers_db",
    port: process.env.PORT || 3306
});
server.connect(function (err) {
    if (err) throw err;
    console.log("Connected at port:3306")
});

module.exports = server;
