var wikiModule = angular.module('wiki', ['ngRoute']);

wikiModule.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false); // For ease of demo-ing
	
	$routeProvider.when('/:slug?', {
		controller: 'contentController',
		templateUrl: 'content.html'
	});
});

wikiModule.controller('wikiController', function($scope) {
	
});

wikiModule.controller('contentController', function($scope, $routeParams) {
	$scope.slug = $routeParams.slug;
});