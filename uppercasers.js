var map=require('through2-map');
var http=require('http');

const PORT=process.argv[2]; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	if(request.method=='POST'){
	request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)
	}
	else{
		return res.end('send me a POST request\n')
	}
}
//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});