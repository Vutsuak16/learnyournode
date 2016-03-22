var fs= require('fs');
fs.readFile(process.argv[2],'utf8',function(err,filecontents){
	  if (err) throw err;
	  console.log(filecontents.split('\n').length-1);
});

