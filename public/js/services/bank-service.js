var app = angular.module('LoanCalculator');

app.service('bankService', function($http, $q) {

	this.getInterest = function() {
		var dfd = $q.defer();
		$http.get('/interest_rate')
			.then(function(response) {
				dfd.resolve(response);
			})
			return dfd.promise;
	};


});