"use strict";

var mongoose = require('bluebird').promisifyAll(require('mongoose')); 
var uri = 'mongodb://localhost/services';
mongoose.connect(uri);  

var Service = mongoose.model('Service', {name : String, price: Number});


exports.all = function(res) {
	Service.findAsync().
	then(function(service) {
		res.send(service);
	}).
	catch(function(err) {
		res.status(404).send(err);
	})
};

exports.get = function(id, res) {
	Service.findByIdAsync(id).then(function(service) {
		res.send(service);
	}).catch(function(err) {
		res.status(404).send(err);
	})
};

exports.create = function(service, res) {
	service = new Service({name: service.name, price: service.price});
	service.saveAsync(service).then(function(service) {
		res.status(201).send(service);
	}).catch(function(err) {
		res.status(500).send(err);
	})
}

exports.update = function(id, service, res) {
	cb(service);
}

exports.delete = function(id, res) {
	Service.findByIdAsync(id).then(function(service) {
		Service.removeAsync(service).then(function() {
			res.status(204).send(true);
		})
	}).catch(function(err) {
		res.status(404).send(err);
	})
}
