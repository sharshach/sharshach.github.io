var http = require('http');
var url = require('url');
var fs = require('fs');
var fs2 = require('fs');

const hostname = '172.16.63.159';
const port = 8080;




const server=http.createServer(function (req, res) {


  var q = url.parse(req.url, true);
 
   var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
    	
    	var filename = "./WDCTWORK-MAIN.html";
  fs.readFile(filename, function(err2, data) {
  	
  	
  	if (err2) {
  	res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
      }
      else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
      }
  	});
    	
    	
    	
    	
    }
    else if(req.url.match("\.css")){
      res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    return res.end();
    }
    else if(req.url.match("\.mp4")){
      res.writeHead(200, {'Content-Type': 'text/mp4'});
    res.write(data);
    return res.end();
    }
    else if(req.url.match("\.zip")){
      res.writeHead(200, {'Content-Type': 'text/mime'});
    res.write(data);
    return res.end();
    }
    else if(req.url.match("\.jpg")){
      res.writeHead(200, {'Content-Type': 'text/jpg'});
    res.write(data);
    return res.end();
    }
    else if(req.url.match("\.png")){
      res.writeHead(200, {'Content-Type': 'text/png'});
    res.write(data);
    return res.end();
    }
    else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  }
  });

  

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
