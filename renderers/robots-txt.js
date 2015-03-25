module.exports = function(config, cb){
	var root_url = "http://" + config.domain;
	var robots = "User-agent: *\n";
	robots += "Allow: /\n";
	robots += "Sitemap: " + root_url + "/sitemap.xml\n";
	cb(null, robots);
};
