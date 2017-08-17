var result = [];
var fs = require("fs");

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream = require("fs").createWriteStream("test.json")

lineReader.on('line', function(line) {
    var jsonFromLine = {};

    var lineSplit = line.split(',');

    jsonFromLine.Total_Urban_Rural = lineSplit[4];
    jsonFromLine.AgeGroup = lineSplit[5];
    jsonFromLine.literate = lineSplit[12];


    result.push(jsonFromLine);

    jsonResult = result.filter(ele => ele['Total_Urban_Rural'] === "Total");
    jsonResult1 = jsonResult.filter(ele => ele['AgeGroup'] === "7");

    totalliterate = jsonResult1.reduce(function(sum, order) {
      var aa = +order.literate
     
        return sum + aa
    },0)
//console.log(totalliterate)

});

lineReader.on('close', function(line) {
    myWriteStream.write(JSON.stringify(jsonResult1, null, 2))
});

/*
----------2nd file------------------------------------------------------------------------------*/


var result_two = [];
var fs = require("fs");

var lineReader_two = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream_two = require("fs").createWriteStream("test_two.json")

lineReader_two.on('line', function(line) {
    var jsonFromLine_two = {};

    var lineSplit_two = line.split(',');

    jsonFromLine_two.StateCode = lineSplit_two[1];
    jsonFromLine_two.Total_Urban_Rural = lineSplit_two[4];

    jsonFromLine_two.Graduate = lineSplit_two[39];
    jsonFromLine_two.Graduate_Male = lineSplit_two[40];
    jsonFromLine_two.Graduate_Female = lineSplit_two[41];

    result_two.push(jsonFromLine_two);



});

lineReader_two.on('close', function(line) {
    myWriteStream_two.write(JSON.stringify(result_two, null, 2))
});