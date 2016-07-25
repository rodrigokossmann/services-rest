"use strict";

var express = require('express');
var router = express.Router();
var Service = require('../models/service');

router.get('/', function(req, res) {
	Service.all(res);
})

router.get('/:id', function(req, res){
   	Service.get(req.params.id, res);
});

router.post('/', function(req, res) {
	Service.create(req.body, res);
});

router.put('/:id', function(req, res) {
	Service.update(req.params.id, res);
});

router.delete('/:id', function(req, res) {
	Service.delete(req.params.id, res);
});

module.exports = router;