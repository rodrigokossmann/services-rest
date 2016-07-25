"use strict";

exports.all = function(cb) {
	var workers = {"workers":[
    {"name" : "Worker 1", "price" : 2.3},
    {"name" : "Worker 2", "price" : 2.3},
    {"name" : "Worker 3", "price" : 2.3}
]};
	cb(workers);
};

exports.get = function(id, cb) {
	var worker = {"name" : "Worker 1", "price" : 2.3};
	cb(worker);
};

exports.create = function(worker, cb) {
	cb(worker);
}

exports.update = function(id, worker, cb) {
	cb(worker);
}

exports.delete = function(id, cb) {
	cb(true);
}
