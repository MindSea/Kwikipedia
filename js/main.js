var wikiModule = angular.module('wiki', []);

wikiModule.controller('wikiController', function($scope) {
	$scope.list = [
		{'text': 'Some', 'color': 'red'},
		{'text': 'neat', 'color': 'blue'},
		{'text': 'things!', 'color': 'green'}
	];
});