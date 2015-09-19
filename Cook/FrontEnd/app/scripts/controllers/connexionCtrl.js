app.controller('connexionCtrl', function($scope, $state, $http, $rootScope){

	$scope.user;
	$scope.password;
	$scope.connexionError;

	$scope.connect = function(){
		$http.get("../../BackEnd/connectUser.php?usr="+$scope.user+"&pwd="+$scope.password).success(function (response) {
		
		if(response.id){
			$rootScope.connectedUser = response;
			$state.go('home.createRecipe.creation');
		}
		else{
			$scope.connexionError = "Le couple identifiant / mot de passe est inccorect."
		}
	});
	};

});