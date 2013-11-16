var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider, $sceProvider) {
	$locationProvider.html5Mode(false); // For ease of demo-ing
	$sceProvider.enabled(false); // because we're doing crazy things
	
	$routeProvider.when('/:slug?', {
		controller: 'contentController',
		templateUrl: 'content.html'
	});
});

wikiModule.factory('Page', function() {
	var title = 'Kwikipedia';
	
	return {
		title: function() { return title; },
		setTitle: function(newTitle) { title = 'Kwikipedia - ' + newTitle; }
	};
});

wikiModule.controller('wikiController', function($scope, Page) {
	$scope.Page = Page;
	
	$scope.data = {
		'Main_Page': '<p>Welcome to the main page!</p><p>Next try the <a href="/#/foo">foo</a> page!</p>',
		'foo': 'the foo page'
	};
});

wikiModule.controller('contentController', function($scope, $routeParams, Page) {
	var slug = $routeParams.slug;
	$scope.slug = slug;
	
	var slugToTitle = function(slug) {
		return slug.replace(/_/g, ' ');
	};
	
	if (slug === '' || slug === undefined) {
		Page.setTitle('Main Page');
		slug = 'Main_Page';
	} else {
		Page.setTitle(slugToTitle(slug));
	}
	
	$scope.content = $scope.data[slug];
});