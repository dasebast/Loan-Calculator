var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService) {

	bankService.getInterest().then(function(response) {
		console.log(response);
		$scope.interest_rate = response.data;
	});

	$scope.calculatePayment = function() {
		$scope.monthly_payment = ((Number($scope.principal) + (4 * (Number($scope.interest_rate) / 100) * Number($scope.principal))) / 48);
	};

});