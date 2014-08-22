requirejs.config({
	baseUrl: '/js',
	paths: {
		jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', 'jquery.min'],
		bootstrap: 'bootstrap.min'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

requirejs([
    'jquery',
    'bootstrap'
    ], function ($, _bootstrap) {
	// this is where all the site code should begin
	return {};
});
