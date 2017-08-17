var fs = require("fs");
var data = '';
var obj = [];

var readerStream = fs.createReadStream('India2011.csv', 'UTF8');
var writerStream = fs.createWriteStream('output.json');

var a;
readerStream.on('data', function(chunk) {
    data += chunk;
    a = data
        .trim()
        .split('\n')
        .map((data) => data.split(','))

    for (var i = 0; i < a.length; i++) {
        if (a[i][4] == 'Total' && a[i][5] != 'All ages') {
            obj[i] = {
                StateCode: a[i][1],
                AgeGroup: a[i][5],
                Literate: a[i][12]
            }

        }
    }

    writerStream.write(JSON.stringify(obj, null, 2), 'UTF8');

})