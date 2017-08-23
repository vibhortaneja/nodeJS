var final_three = [];
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

lineReader_three.on('close', function() {
    obj = {
        literate: s[0],
        belowprimary: s[1],
        primary: s[2],
        middle: s[3],
        secondary: s[4],
        higher_secondary: s[5],
        non_diploma: s[6],
        tech_diploma: s[7],
        graduate: s[8],
        unclassified: s[9]
    }
    final_three.push(obj)
    myWriteStream_three.write(JSON.stringify(final_three, null, 2))
})
/*  sumBelowprimary = jsonResult_three.reduce((s, ele) => {
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
  }, 0);*/


/*    var array_three = {};
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
});*/