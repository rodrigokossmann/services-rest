"use strict";

var fs = require('fs');

exports.listFiles = function(path, cb) {
	fs.readdir(path, function(err, items) {
	    cb(items)
	});
}

exports.execFuncForFiles = function(path, withExtension, cb) {
	this.listFiles('./controllers', function(files) {	
		for (var i = 0, len = files.length; i < len; i++) {
			var file = files[i];
			if(!withExtension) {
				file = file.slice(0, -3)
			}
			cb(file);
		}
	});
}