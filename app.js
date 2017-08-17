
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('India2011.csv');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
   data += chunk;
	var a = data
		.trim()
		.split('\n')
		.map((data) => data.split(','));

console.log(a[1]);
});



readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});
