var fs = require('fs');
var path = require('path');
var async = require('async');

module.exports = function(files, fn){
	return function(config, cb){
		async.map(files.map(function(file){
			return path.join(config.src_folder, file);
		}), fs.readFile, function(err, files_data){
			if(err){
				cb(err);
				return;
			}
			cb(null, fn.apply(null, [config].concat(files_data)));
		});
	};
};
