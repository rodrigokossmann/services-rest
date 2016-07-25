"use strict";

var express = require('express')
  , router = express.Router();
var path = require('../helpers/path');

path.execFuncForFiles('./controllers', false, function(file) {
	if(file != 'index') {
		router.use('/'+ file, require('./'+file));
	}
});
module.exports = router;