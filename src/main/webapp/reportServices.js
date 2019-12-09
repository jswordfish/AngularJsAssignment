var ReportService = angular.module('ReportService', [])
.service('Reports', [ '$http', function($http) {
    this.getAllCompanies = function () {
 
	var url = '../companyapp/ws/rest/companyService/fetchall/token/test';
	
	var promise = $http.get(url).
	    success(function(data) {
	    console.log('success');
		return 'success' ;
	    })
	    .error(function(data) {
	    console.log('failure');
		return 'failure' ;
	    })
	    
	return promise;
    
	
    
    };
    
    this.getTest = function(){
	return 'Tis is a message from the Report service method';
    };
    
  

}]);


  
  

