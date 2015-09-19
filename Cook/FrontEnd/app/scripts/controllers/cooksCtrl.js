app.controller('cooksCtrl', function($scope, $http, $state){

	$scope.cooks = [];

	$http.get("../../BackEnd/loadCooks.php").success(function (response) {
		$scope.cooks = response;
	});

	$scope.openDetails = function(cook){
		$state.go('home.cookDetails', {cookId: cook.id});
	};


});