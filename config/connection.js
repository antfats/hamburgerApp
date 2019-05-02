var sql = require("mysql");


var server = {
    host: "localhost",
    user: "root",
    password: "Tdaca12-23*",
    database: "burger_db",
    port: process.env.PORT || 8080
}
sql.createConnection(server, function (err) {
    if (err) throw err;
});

server.connect(function (err) {
if(err) throw err;

})

