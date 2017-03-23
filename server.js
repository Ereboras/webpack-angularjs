var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');
var dir = "app";

var app = express();
app.set('port', 8080); 

var serveStaticParams = { index: ["index.html"] };

app.use(serveStatic(dir, serveStaticParams));

http.createServer(app).listen(app.get('port'), function(){
    console.log('[HTTP_SERVICE] started : listening on port ' + app.get('port') + " protocol http");
});