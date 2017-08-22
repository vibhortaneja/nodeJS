var result = [],
    final = [],
    result_two = [],
    final_two = [],
    final_three = [];
var fs = require("fs");
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});
var myWriteStream = require("fs").createWriteStream("test_one.json")
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

var fs = require("fs");
var lineReader_two = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});
var myWriteStream_two = require("fs").createWriteStream("test_two.json")
lineReader_two.on('line', function(line) {
    var jsonFromLine_two = {};
    var lineSplit_two = line.split(',')
    var x = lineSplit_two[1]
    if (x == '01' || x == '02' || x == '03' || x == '04' || x == '05' || x == '06' || x == '07' || x == '08' || x == '09')
        x = x.charAt(1)
    jsonFromLine_two.StateCode = x
    jsonFromLine_two.StateName = lineSplit_two[3]
    jsonFromLine_two.Total_Urban_Rural = lineSplit_two[4]
    jsonFromLine_two.AgeGroup = lineSplit_two[5]
    jsonFromLine_two.Graduate = lineSplit_two[39]
    jsonFromLine_two.Graduate_Male = lineSplit_two[40]
    jsonFromLine_two.Graduate_Female = lineSplit_two[41]
    result_two.push(jsonFromLine_two)
});
var jsonResult_two = [];
lineReader_two.on('close', function() {
    var j = 1;
    while (j != 36) {
        var loop = j.toString();
        jsonResult_two = result_two.filter(ele => ele['Total_Urban_Rural'] === "Total" && ele['AgeGroup'] === "All ages" && ele['StateCode'] === loop)
        var statename = jsonResult_two.map((obj) => obj.StateName)
        var graduate = jsonResult_two.map((obj) => obj.Graduate)
        var male = jsonResult_two.map((obj) => obj.Graduate_Male)
        var female = jsonResult_two.map((obj) => obj.Graduate_Female)
        var array_two = {};
        array_two.StateName = statename[0]
        array_two.GraduateT = graduate[0]
        array_two.GraduateM = male[0]
        array_two.GraduateF = female[0]
        final_two.push(array_two)
        j++
    }
});
lineReader_two.on('close', function(line) {
    myWriteStream_two.write(JSON.stringify(final_two, null, 2))
});

var fs = require("fs");
var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var lineReader_three = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});
var myWriteStream_three = require("fs").createWriteStream("test_three.json")
lineReader_three.on('line', function(line) {
    var jsonFromLine_three = {};
    var lineSplit_three = line.split(',')
    if (lineSplit_three[4] == 'Total' && lineSplit_three[5] == 'All ages') {
        for (let i = 0, j = 15; i < 10; i++, j += 3) {
            s[i] = s[i] + parseInt(lineSplit_three[j])
        }
    }
});
var edu = ['Literate_without_educational', 'Below_Primary', 'Primary', 'Middle', 'Matric_Secondary', 'Higher_secondary_Senior_secondary',
    'Non_technical_diploma_degree', ' Technical_diploma', 'Graduate_above', 'Unclassified'
]
lineReader.on('close',
    function() {
        final_three = []
        for (var i = 0; i < 10; i++) {
            final_three[i] = {
                EducationClass: edu[i],
                Totalvalue: s[i]
            }
        }
        myWriteStream_three.write(JSON.stringify(final_three, null, 2))
    })