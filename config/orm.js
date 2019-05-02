
//SQL get name of burgers to post on page
burgerNames = function () {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT burgerName FROM freshBurger", function (err, res, fields) {
            if (err) throw err;
            console.log(res);
        })
    })
}

addBurger = function (name, desc) {
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
export function burgerNames();
export function addBurger();

