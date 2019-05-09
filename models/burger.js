var orm = require("../config/orm")

var burger = {
    //Log all fresh burgers
    all : function (cb) {
        orm.all("freshburger", function (res) {
            cb(res);
        });
    },
    //eat burger
    update : function (id,cb) {
        orm.update("freshburger", function (res) {
            cb(res);
        })
    }
}


module.exports = burger;
