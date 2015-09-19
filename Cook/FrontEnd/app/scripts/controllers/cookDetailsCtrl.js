app.controller('cookDetailsCtrl', function($scope, $http, $stateParams, $state){

	$scope.cookId = $stateParams.cookId;

	$http.get("../../BackEnd/findCookById.php?cookId="+$scope.cookId).success(function (response) {
		$scope.cook = response;
	});
	
	$scope.openRecipe = function(recipe){
		$state.go('home.recipeDetails', {recipeId: recipe.id});
	};
});