var orm = require("../config/orm")

var burger = {
    showAll : function (cb) {
        orm.burgerNames("freshBurger", function (res) {
            cb(res);
        });
    },
    addOne : function (cb) {
        orm.addBurger("freshBurger", function (res) {
            cb(res);
        })
    }
}


module.exports = burger;
