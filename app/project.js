var projmodule = angular.module('projmodule',['ngRoute','ngCookies']);


projmodule.config(function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl:"view/dashboard.html",
			controller:"dashController"
		})
		.when("/create-project",{
			templateUrl:"view/project.html",
			controller:"projectController"
		});
});

// projmodule.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix('');
// }]);



