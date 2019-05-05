var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.showAll(function (data) {
        var hbsObject = {
            freshBurger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


module.exports = router;