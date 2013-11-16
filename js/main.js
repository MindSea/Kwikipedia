var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false); // For ease of demo-ing
	
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
});