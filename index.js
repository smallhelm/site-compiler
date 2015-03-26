var fs = require('fs');
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');

var build = function(config, cb){
	async.each(config.files, function(page, cb){
		var dest_file = path.normalize(config.public_folder + page.url);
		async.seq(
			page.render,
			function(data, cb){
				mkdirp(path.dirname(dest_file), function(err){
					if(err){
						cb(err);
						return;
					}
					fs.writeFile(dest_file, data, cb);
				});
			}
		)(config, cb);
	}, cb);
};

module.exports = build;
module.exports.justRun = function(config){
	var start = (new Date()).getTime();
	console.log("building", config.domain);
	build(config, function(err){
		if(err){
			console.error("Error building", config.domain, err);
		}
		console.log("built", config.domain, "in", ((new Date()).getTime() - start) + "ms");
	});
};
