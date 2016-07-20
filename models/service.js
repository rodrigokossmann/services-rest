"use strict";

exports.get = function(id, cb) {
	var service = {'name' : 'Serviço '+id, 'price' : 2.3};
	cb(service);
};