app.controller('homeCtrl', function($scope, $state){

	$scope.menus = [{label:'Recettes', page:'home.receipts'}, {label:'Cuisiniers', page:'home.cooks'}, {label:'Rechercher', page:'home.search'}, {label: 'Créer une recette', page: 'home.createRecipe'}];

	$scope.selectPage = function(page){
		$state.go(page);
	};

	$scope.goHome = function(){
		$state.go('home.receipts');
	};

	$state.go('home.receipts');

});