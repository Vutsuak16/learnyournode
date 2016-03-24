var fs=require('fs');
var path=require('path');
fs.readdir(process.argv[2], function callback(err,file){
	if(err) throw err;
	for(var i=0;i<file.length;i++){
		if(path.extname(file[i])==process.argv[3]){
			console.log(file[i]);
		}
	}
});