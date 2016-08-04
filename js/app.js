'use strict';
var phonecatApp = angular.module("phonecatApp",[
	"ngRoute",
	"phonecatControllers",
	"phonecatServices",
	"phonecatFilters"
]);

phonecatApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/phones",{
		template:'<div>Home</div>',
		controller:'PhoneListCtrl'
	}).when("/phones/:phoneId",{
		template:'',
		controller:'PhoneDetailCtrl'
	}).otherwise({
		redirectTo:'/phones'
	});
}]);