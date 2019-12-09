var app = angular.module("app", ['ngRoute', 'ReportService']);


app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/', {
    templateUrl: 'main.html',
    controller: 'MainController',
    controllerAs: 'homeCtrl'
  }).
  when('/about', {
    templateUrl: 'about.html',
    controller: 'AgendaController',
    controllerAs: ''
  }).
  when('/detail', {
      templateUrl: 'schedule.html',
      controller: 'ScheduleController',
      controllerAs: ''
    })
      . when('/allcomp', {
      templateUrl: 'reports/AllCompanies.html',
      controller: 'ReportsController',
      controllerAs: ''
    })
    .otherwise({
      redirectTo: '/'
    });

}])

app.controller('MainController',function($scope){
   $scope.message = 'Everyone come and see how good I look!';
  
});
app.controller('AgendaController',function($scope){
   $scope.message = 'Lets look at the agenda!';
  
});
app.controller('ScheduleController',function($scope){
   $scope.message = 'Lets talk of the schedule!';
  
});

app.controller('ReportsController',function($scope, Reports){
   var promise =  Reports.getAllCompanies();
  promise.then(function(response){
	console.log('111');
	console.log(response);
	console.log(JSON.stringify(response));
	$scope.companies = response.data;
});
});





