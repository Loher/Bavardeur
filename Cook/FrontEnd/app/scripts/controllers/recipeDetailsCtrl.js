app.controller('recipeDetailsCtrl', function($scope, $http, $stateParams, $state){

	$scope.recipeId = $stateParams.recipeId;

	$http.get("../../BackEnd/findRecipeById.php?recipeId="+$scope.recipeId).success(function (response) {
		$scope.recipe = response;
	});

	$scope.openCookDetails = function(){
		$state.go('home.cookDetails', {cookId: $scope.recipe.cook.id});
	};
	
});