var orm = require("../config/orm")
var burgerName = (req.param)

var burger = {
    showAll = function () {
        $("#allBtn").click(function () {
            orm.burgerNames();
        });
    },
    addOne = function () {
        $("#addBurger").click(function () {
            orm.addBurger();
        })
    }
}

module.exports = burger;
