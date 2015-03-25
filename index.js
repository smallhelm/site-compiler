var fs = require('fs');
var async = require('async');

var build = function(config, cb){
	async.each(config.pages, function(page, cb){
		async.seq(page.render, function(data, cb){
			fs.writeFile(config.public_folder + page.url, data, cb);
		})(config, cb);
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
