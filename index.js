var result = [];
var fs = require("fs");

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream = require("fs").createWriteStream("test.json")

lineReader.on('line', function(line) {
    var jsonFromLine = {};

    var lineSplit = line.split(',');

    jsonFromLine.StateCode = lineSplit[1];
    jsonFromLine.Total_Urban_Rural = lineSplit[4];
    jsonFromLine.AgeGroup = lineSplit[5];
    jsonFromLine.literate = lineSplit[12];
    jsonFromLine.Graduate = lineSplit[39];
    jsonFromLine.Graduate_Male = lineSplit[40];
    jsonFromLine.Graduate_Female = lineSplit[41];

    result.push(jsonFromLine);


});

lineReader.on('close', function(line) {
    myWriteStream.write(JSON.stringify(result, null, 2))
});


