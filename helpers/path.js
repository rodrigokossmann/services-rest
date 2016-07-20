"use strict";

var fs = require('fs');

exports.listFiles = function(path, callback) {
	fs.readdir(path, function(err, items) {
	    callback(items)
	});
}