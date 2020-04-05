'use strict';

var PORT 		= process.env.PORT || 5000
var express 	= require("express");
var path		= require('path');
var bodyParser  = require('body-parser');
var app     	= express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public' ));

app.get('/',function(request, response){
	response.sendFile(path.join(__dirname,'public','/index.html'));
});

app.get('/about',function(request, response){
	response.sendFile(path.join(__dirname,'public','/about.html'));
});

app.get('/resources',function(request, response){
	response.sendFile(path.join(__dirname,'public','/resources.html'));
});

app.listen(PORT);



