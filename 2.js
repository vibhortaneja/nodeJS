
var test = require ("./test.json")
var test1 = test.filter(function (e) {
    return e.StateCode == 01;
});
console.log(test1);