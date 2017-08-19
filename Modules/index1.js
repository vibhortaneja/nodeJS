var result = [];
var final = [];
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
});

lineReader.on('close', function() {
    var i = 2;
    while (i != 30) {
        var loop = i.toString();
        jsonResult = result.filter(ele => ele['Total_Urban_Rural'] === "Total" && ele['AgeGroup'] === result[loop]['AgeGroup']);

        sum = jsonResult.reduce((s, ele) => {
            s = s + parseInt(ele.literate);
            return s;
        }, 0);



        var array = {};
        array.AgeGroup = result[loop]['AgeGroup'];
        array.totalLiterate = sum;
        final.push(array);
        i++;

    }

});

lineReader.on('close', function(line) {
    myWriteStream.write(JSON.stringify(final, null, 2))
});
