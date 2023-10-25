const http = require('http');

http.createServer(function(req, res){
	res.write("king in the north jon snow");
	res.end();
}).listen(3000);

console.log("server started on port 3000");
