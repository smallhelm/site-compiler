var fs = require('fs');
var async = require('async');

module.exports = function(config, cb){
	async.each(config.pages, function(page, cb){
		async.seq(page.render, function(data, cb){
			fs.writeFile(config.public_folder + page.url, data, cb);
		})(config, cb);
	}, cb);
};
