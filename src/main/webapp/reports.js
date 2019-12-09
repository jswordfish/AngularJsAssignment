var app = angular.module('app', []);

app
		.controller(
				'AllCompaniesController',
				function($scope, $http, Reports) {
				 $scope.message = 'Lets talk of the all company!';
					
					$scope.getAllCompanies = function() {
						$scope.companies = Reports.getAllCompanies();
					}
					
					
					

				});
