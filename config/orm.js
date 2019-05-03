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



    addBurger = function (name, bool) {
        let queryString = "INSERT INTO freshburger VALUE ?";
            connection.query(queryString[burgerName], function (err, res) {
                if (err) throw err;
            });
        });
    },

    eatBurger = function () {
        $("#eatBtn").click()
    }
}
module.exports = orm;


