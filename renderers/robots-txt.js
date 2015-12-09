module.exports = function(config, cb){
	var robots = "User-agent: *\n";
	robots += "Allow: /\n";
	robots += "Sitemap: " + config.base_url + "/sitemap.xml\n";
	cb(null, robots);
};
