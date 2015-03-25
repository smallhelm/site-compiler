module.exports = function(config, cb){
	var root_url = "http://" + config.domain;
	var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	sitemap += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
	sitemap += config.pages.filter(function(page){
		return !page.exclude_from_sitemap;
	}).map(function(page){
		return "  <url>\n    <loc>" + root_url + page.url.replace(/index.html$/, "") + "</loc>\n  </url>\n";
	}).join("");
	sitemap += "</urlset>\n";
	cb(null, sitemap);
};
