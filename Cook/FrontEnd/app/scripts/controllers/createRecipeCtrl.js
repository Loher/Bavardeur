app.controller('createRecipeCtrl', function($scope, $state, $rootScope){


	if($rootScope.connectedUser){
		$state.go('home.createRecipe.creation');
	}
	else{
		$state.go('home.createRecipe.connexion');
		//$state.go('home.createRecipe.creation');
	}

});