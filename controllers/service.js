"use strict";

	var express = require('express')
  	, router = express.Router()
  	, Service = require('../models/service')

	router.get('/find/:id', function(req, res){
	   	Service.get(req.params.id, function(service) {
	   		res.send(service);
	   	});
	 });

	module.exports = router;