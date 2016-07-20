"use strict";

	var express = require('express');
    var app = express();

	app.get('/', function(req, res){
    	res.send('Tá de pé!');
  	});

    app.use(require('./controllers'));

	var server = app.listen(8080);
	console.log('Servidor Express iniciado na porta %s', server.address().port);