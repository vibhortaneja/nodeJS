var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('India2011.csv');
readerStream.setEncoding('UTF8');
var a;
readerStream.on('data', function(chunk) {
    data += chunk;
    a = data
        .trim()
        .split('\n')
        .map((data) => data.split(','));


});

readerStream.on('end', function() {
    for (i = 0; i <= 3045; i++) {
        if (a[i][4] == 'Total' && a[i][5] != 'All ages') {
            console.log("StateCode:" + a[i][1], "AgeGroup:" + a[i][5], "Literate:" + a[i][12]);

        }
    }

});

readerStream.on('error', function(err) {
    console.log(err.stack);
});