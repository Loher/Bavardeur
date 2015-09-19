app.controller('creationCtrl', function($scope, $state, Upload){

	$scope.step = 1;
	$scope.recipe = {};
	$scope.recipe.ingredients = [{ingredient:""}];
	$scope.recipe.steps = [{description: ""}];
	$scope.types = [{code: 0, label:"apéro"}, {code: 1, label:"entrée"}, {code: 2, label:"plat principal"}, {code: 3, label:"dessert"}, {code: 4, label:"picnic"}];
	$scope.file = {};
	$scope.file.value;
	$scope.error = "";


	$scope.goToNextSetp = function(){
		if($scope.checkFormValidity() && $scope.step < 3){
			$scope.step++;
		}	
	};

	$scope.goToPreviousStep = function(){
		if($scope.step > 1){
			$scope.step--;
		}	
	};

	$scope.addIngredient = function(){
		$scope.recipe.ingredients.push({ingredient: ""});
	};

	$scope.removeIngredient = function(ingredient){
		for(var i = 0; i < $scope.recipe.ingredients.length; i++){
			if($scope.recipe.ingredients[i] == ingredient){
				$scope.recipe.ingredients.splice(i, 1);
				break;
			}
		}
	};

	$scope.addStep = function(){
		$scope.recipe.steps.push({description: ""});
	};

	$scope.removeStep = function(step){
		for(var i = 0; i < $scope.recipe.steps.length; i++){
			if($scope.recipe.steps[i] == step){
				$scope.recipe.steps.splice(i, 1);
				break;
			}
		}
	};

	$scope.checkFormValidity = function(){
		if($scope.step == 1){
			return $scope.checkValidityOfStep1();
		}else if($scope.step == 2){
			return $scope.checkValidityOfStep2();
		}
	};

	$scope.checkValidityOfStep1 = function(){
		if(!$scope.recipe.title){
			$scope.error = "Le titre n'est pas renseigné";
			return false;
		}
		if(!$scope.recipe.difficulty){
			$scope.error = "La difficulté n'est pas renseignée";
			return false;
		}
		if(!$scope.recipe.time){
			$scope.error = "Le temps de préparation n'est pas renseigné";
			return false;
		}
		if($scope.recipe.type != 0 && !$scope.recipe.type){
			$scope.error = "Le type de recette n'est pas renseigné";
			return false;
		}
		if(!$scope.recipe.nbOfPersons){
			$scope.error = "Le nombre de personnes n'est pas renseigné";
			return false;
		}
		if(!$scope.file.value || $scope.file.value.length == 0){
			$scope.error = "La photo n'a pas été ajoutée";
			return false;
		}
		$scope.error = "";
		return true;
	};

	$scope.checkValidityOfStep2 = function(){
		if(!$scope.recipe.ingredients || $scope.recipe.ingredients.length == 0 || ($scope.recipe.ingredients.length == 1 && $scope.recipe.ingredients[0].ingredient == "")){
			$scope.error = "Il faut ajouter au moins un ingrédedient";
			return false;
		}
		$scope.error = "";
		return true;
	};

	$scope.checkValidityOfStep3 = function(){
		if(!$scope.recipe.steps || $scope.recipe.steps.length == 0 || ($scope.recipe.steps.length == 1 && $scope.recipe.steps[0].description == "")){
			$scope.error = "Il faut ajouter au moins une étape";
			return false;
		}
		$scope.error = "";
		return true;
	};

	$scope.validate = function(){
		if($scope.checkValidityOfStep3()){

		}
	};

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'upload/url',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });
            }
        }
    };


});