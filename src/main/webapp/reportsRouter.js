var app = angular.module("app", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
  when('/allcomp', {
    templateUrl: 'reports/AllCompanies.html',
    controller: 'AllCompaniesController',
    controllerAs: 'homeCtrl'
  }).
  when('/activecomp', {
    templateUrl:'reports/ActiveCompanies.html',
    controller: 'ActiveCompaniesController',
    controllerAs: ''
  }).
  when('/transcomp', {
      templateUrl: 'reports/TransactionalCompanies.html',
      controller: 'TransactionalCompaniesController',
      controllerAs: ''
    })
    . when('/complaints', {
      templateUrl: 'reports/ComplaintsForCompanies.html',
      controller: 'ComplaintsController',
      controllerAs: ''
    })
      . when('/systemreports', {
      templateUrl: 'reports/SystemReports.html',
      controller: 'SystemReportsController',
      controllerAs: ''
    })
    .otherwise({
      redirectTo: '/'
    });

}])

app.controller('AllCompaniesController',function($scope){
   $scope.message = 'All companies';
  
});
app.controller('ActiveCompaniesController',function($scope){
   $scope.message = 'Lets look at the Active Companies!';
  
});
app.controller('TransactionalCompaniesController',function($scope){
   $scope.message = 'Lets talk of the transactional Companies!';
  
});
app.controller('ComplaintsController',function($scope){
   $scope.message = 'Lets talk of the complaints for Companies!';
  
});
app.controller('ComplaintsController',function($scope){
   $scope.message = 'System Reports';
  
});