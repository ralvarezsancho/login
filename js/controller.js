var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/login.html'
	})
	.when('/dashboard', {
		templateUrl: 'templates/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location) {
	$scope.submit = function() {
		var name = $scope.username;
		var password = $scope.password;
		if ($scope.username == 'admin' && $scope.password == 'admin') {
			$location.path('/dashboard');
		} else {
			alert('Wrong input.');
		}
	};
});