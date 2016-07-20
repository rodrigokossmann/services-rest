"use strict";

var express = require('express')
  , router = express.Router();
var path = require('../helpers/path');

path.listFiles('./controllers', function(files) {
	for (var i = 0, len = files.length; i < len; i++) {
		var file = files[i];
		if(file != 'index.js') {
			var fileName = file.slice(0, -3);
			router.use('/'+ fileName, require('./'+fileName));
		}
	}
});
module.exports = router;