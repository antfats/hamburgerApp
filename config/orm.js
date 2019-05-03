var connection = require(server);


//SQL get name of burgers to post on page
module.exports = function () {
    burgerNames = function () {
        connection.connect(function (err) {
            if (err) throw err;
            connection.query("SELECT burgerName FROM freshBurger", function (err, res) {
                if (err) throw err;
                console.log(res);
            })
        })
    }



    addBurger = function (name, bool) {
        conncetion.connect(function (err) {
            if (err) throw err;
            connection.query("INSERT INTO freshBurger VALUES (?,?)", function (err, res) {
                if (err) throw err;
            });
        });
    }

    eatBurger = function () {
        $("#eatBtn").click()
    }
}
