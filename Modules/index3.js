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