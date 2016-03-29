var map=require('through2-map');
var http=require('http');

const PORT=process.argv[2]; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	if(request.method=='POST'){
	var body = [];
	request.on('data',function(chunk){
		    body.push(chunk);
		});
    request.on('end',function(){   
		body = Buffer.concat(body).toString();
	});
response.write(body);
    response.end();
	}
}
//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});