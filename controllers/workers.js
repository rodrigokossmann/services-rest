"use strict";

var express = require('express')
, router = express.Router()
, Worker = require('../models/worker')

router.get('/:id', function(req, res){
   	Worker.get(req.params.id, function(worker) {
   		res.send(worker);
   	});
});

module.exports = router;