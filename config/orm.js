var connection = require("./connection.js");

//SQL get name of burgers to post on page
var orm = {

    all: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },

    update: function (table, condition, cb) {
        connection.query("UPDATE " + table + " SET devoured=true WHERE id="
            + condition + ";", function (err, res) {
                if (err) throw err;
                cb(res);
            });
    }
}
module.exports = orm;