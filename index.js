var result = [];
var final = [];
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


/*----------------------2nd File------------------------------------------------*/

var result_two = [];
var final_two = [];
var fs = require("fs");

var lineReader_two = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream_two = require("fs").createWriteStream("test_two.json")

lineReader_two.on('line', function(line) {
    var jsonFromLine_two = {};

    var lineSplit_two = line.split(',')

    jsonFromLine_two.StateCode = lineSplit_two[1]
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
    var j = 01;
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


/*-----------------3rd File--------------------------------------------------*/

var result_three = [];
var final_three = [];
var fs = require("fs");

var lineReader_three = require('readline').createInterface({
    input: require('fs').createReadStream('India2011.csv')
});

var myWriteStream_three = require("fs").createWriteStream("test_three.json")

lineReader_three.on('line', function(line) {
    var jsonFromLine_three = {};

    var lineSplit_three = line.split(',')

    jsonFromLine_three.Total_Urban_Rural = lineSplit_three[4]
    jsonFromLine_three.AgeGroup = lineSplit_three[5]
    jsonFromLine_three.literate = lineSplit_three[15]
    jsonFromLine_three.belowprimary = lineSplit_three[18]
    jsonFromLine_three.primary = lineSplit_three[21]
    jsonFromLine_three.middle = lineSplit_three[24]
    jsonFromLine_three.secondary = lineSplit_three[27]
    jsonFromLine_three.higher_secondary = lineSplit_three[30]
    jsonFromLine_three.non_diploma = lineSplit_three[33]
    jsonFromLine_three.tech_diploma = lineSplit_three[36]
    jsonFromLine_three.graduate = lineSplit_three[40]
    jsonFromLine_three.unclassified = lineSplit_three[43]


    result_three.push(jsonFromLine_three)

});

var jsonResult_three = [];
lineReader_three.on('close', function() {
    
        jsonResult_three = result_three.filter(ele => ele['Total_Urban_Rural'] === "Total" && ele['AgeGroup'] === "All ages" )

        sumLiterate = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.literate);
            return s;
        }, 0);

        sumBelowprimary = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.belowprimary);
            return s;
        }, 0);

        sumPrimary = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.primary);
            return s;
        }, 0);

        sumMiddle = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.middle);
            return s;
        }, 0);

        sumSecondary = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.secondary);
            return s;
        }, 0);

        sumHighersecondary = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.higher_secondary);
            return s;
        }, 0);

        sumNondiploma = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.non_diploma);
            return s;
        }, 0);

        sumTechdiploma = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.tech_diploma);
            return s;
        }, 0);

        sumGraduate = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.graduate);
            return s;
        }, 0);

        sumUnclassified = jsonResult_three.reduce((s, ele) => {
            s = s + parseInt(ele.unclassified);
            return s;
        }, 0);


        var array_three = {};
        array_three.Literate_without_education = sumLiterate
        array_three.Below_primary = sumBelowprimary
        array_three.primary = sumPrimary
        array_three.Middle = sumMiddle
        array_three.Secondary = sumSecondary
        array_three.Higher_secondary = sumHighersecondary
        array_three.Non_diploma = sumNondiploma
        array_three.Tech_diploma = sumTechdiploma
        array_three.Graduate = sumGraduate
        array_three.Unclassified = sumUnclassified
        

        final_three.push(array_three)
        

});

lineReader_three.on('close', function(line) {
    myWriteStream_three.write(JSON.stringify(final_three, null, 2))
});
