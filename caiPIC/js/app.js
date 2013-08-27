require.config({
	baseUrl : "js/lib",
	paths : {
		app : "../app",
		jquery : "jquery-1.7.2.min"
	},
	urlArgs : "bust=" + (new Date()).getTime()
});
require(["app/main"]);