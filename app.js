"use strict";

	var express = require('express');
    var app = express();
	var bodyParser = require('body-parser')

    app.use(bodyParser.json());

    app.use(require('./controllers'));

	var server = app.listen(8080);
	console.log('Servidor Express iniciado na porta %s', server.address().port);