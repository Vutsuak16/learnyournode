//to use http server and client one must require('http')

var http=require('http');

http.get(process.argv[2],function(response){
	//var str="";
	response.setEncoding('utf8');
	response.on("data",function(data){
		console.log(data);
	});
	/*response.on('end',function(){   can also be done like this
		console.log(str);
	});	*/	
});