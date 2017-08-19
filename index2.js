var result_two = [];
var final_two = [];
var fs = require("fs");

var lineReader_two = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream_two = require("fs").createWriteStream("test_two.json")

lineReader_two.on('line', function(line) {
    var jsonFromLine_two = {};

    var lineSplit_two = line.split(',');

    jsonFromLine_two.StateCode = lineSplit_two[1];
    jsonFromLine_two.StateName = lineSplit_two[3];
    jsonFromLine_two.Total_Urban_Rural = lineSplit_two[4];
    jsonFromLine_two.AgeGroup = lineSplit_two[5];
    jsonFromLine_two.Graduate = lineSplit_two[39];
    jsonFromLine_two.Graduate_Male = lineSplit_two[40];
    jsonFromLine_two.Graduate_Female = lineSplit_two[41];

    result_two.push(jsonFromLine_two);

});

var jsonResult_two = [];
lineReader_two.on('close', function() {
    var j = 01;
    while (j != 36) {
        var loop = j.toString();
        jsonResult_two = result_two.filter(ele => ele['Total_Urban_Rural'] === "Total" && ele['AgeGroup'] === "All ages" && ele['StateCode'] === loop);


        var statename = jsonResult_two.map((obj) => obj.StateName);
        var graduate = jsonResult_two.map((obj) => obj.Graduate);
        var male = jsonResult_two.map((obj) => obj.Graduate_Male);
        var female = jsonResult_two.map((obj) => obj.Graduate_Female);
        var array_two = {};
        array_two.StateName = statename[0];
        array_two.GraduateT = graduate[0];
        array_two.GraduateM = male[0];
        array_two.GraduateF = female[0];

        final_two.push(array_two);
        j++;
        console.log(array_two);
    }

});

lineReader_two.on('close', function(line) {
    myWriteStream_two.write(JSON.stringify(final_two, null, 2))
});