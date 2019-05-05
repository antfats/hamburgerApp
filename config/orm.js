var connection = require(server);

//SQL get name of burgers to post on page
var orm = {

    burgerNames = function () {
        let queryString = "SELECT burgerName from freshBurger";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
        })
    },

    addBurger = function (name) {
        let queryString = "INSERT INTO freshburger VALUE ?";
        connection.query(queryString, [name], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },

    eatBurger = function (id) {
        let queryString = "UPDATE freshburger WHERE id = ?";
        connection.query(queryString, [id], function (err, res) {
            if (err) throw err;
            console.log(res);
        })
    }
}

module.exports = orm;


