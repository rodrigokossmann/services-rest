"use strict";

exports.get = function(id, cb) {
	var worker = {'name' : 'Trabalhador '+id, 'idade' : 23};
	cb(worker);
};