app.controller('receiptsCtrl', function($scope, $http, $state){

	$scope.receipts = [];
	$scope.receiptsFull = [];
	$scope.aperitifs = [];
	$scope.entries = [];
	$scope.dishes = [];
	$scope.desserts = [];
	$scope.picnic = [];
	$scope.recipeType = "n'importe quoi";

	$scope.iwant = ["n'importe quoi", "un apéro", "une entrée", "un plat principal", "un dessert", "un picnic"];

	$http.get("../../BackEnd/loadReceipts.php").success(function (response) {
		$scope.receiptsFull = response;
		$scope.receipts = $scope.receiptsFull;
		$scope.computeReceiptsLists();
	});

	$scope.computeReceiptsLists = function(){
		for(var i = 0; i < $scope.receipts.length; i++){
			if($scope.receipts[i].type == 0){
				//Aperos
				$scope.aperitifs.push($scope.receipts[i]);
			}
			else if($scope.receipts[i].type == 1){
				//Entrées
				$scope.entries.push($scope.receipts[i]);
			}
			else if($scope.receipts[i].type == 2){
				//Plats principaux
				$scope.dishes.push($scope.receipts[i]);
			}
			else if($scope.receipts[i].type == 3){
				//Desserts
				$scope.desserts.push($scope.receipts[i]);
			}
			else if($scope.receipts[i].type == 4){
				//Picnic
				$scope.picnic.push($scope.receipts[i]);
			}
		}
	};

	$scope.openRecipe = function(recipe){
		$state.go('home.recipeDetails', {recipeId: recipe.id});
	};



  	$scope.changeRecipeType = function(){
  		if($scope.recipeType == $scope.iwant[0]){
  			$scope.receipts = $scope.receiptsFull;
  		}
  		else if($scope.recipeType == $scope.iwant[1]){
  			$scope.receipts = $scope.aperitifs;
  		}
  		else if($scope.recipeType == $scope.iwant[2]){
  			$scope.receipts = $scope.entries;
  		}
  		else if($scope.recipeType == $scope.iwant[3]){
  			$scope.receipts = $scope.dishes;
  		}
  		else if($scope.recipeType == $scope.iwant[4]){
  			$scope.receipts = $scope.desserts;
  		}
  		else if($scope.recipeType == $scope.iwant[5]){
  			$scope.receipts = $scope.picnic;
  		}
  	};

});