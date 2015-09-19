'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('cookBook', [
  'ui.router',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngFileUpload'
]);


app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

   $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: 'homeCtrl'
    }).state('home.receipts', {
      url: "/receipts",
      templateUrl: "views/receipts.html",
      controller: 'receiptsCtrl'
    }).state('home.cooks', {
      url: "/cooks",
      templateUrl: "views/cooks.html",
      controller: 'cooksCtrl'
    }).state('home.search', {
      url: "/search",
      templateUrl: "views/search.html",
      controller: 'searchCtrl'
    }).state('home.cookDetails', {
      url: "/cookDetails/:cookId",
      templateUrl: "views/cookDetails.html",
      controller: 'cookDetailsCtrl'
    }).state('home.recipeDetails', {
      url: "/recipeDetails/:recipeId",
      templateUrl: "views/recipeDetails.html",
      controller: 'recipeDetailsCtrl'
    }).state('home.createRecipe', {
      url: "/createRecipe",
      templateUrl: "views/createRecipe.html",
      controller: 'createRecipeCtrl'
    }).state('home.createRecipe.connexion', {
      url: "/connexion",
      templateUrl: "partials/connexion.html",
      controller: 'connexionCtrl'
    }).state('home.createRecipe.creation', {
      url: "/creation",
      templateUrl: "partials/creation.html",
      controller: 'creationCtrl'
    });
});



app.run(function ($rootScope){

  $rootScope.connectedUser;

    $rootScope.getRecipeType = function(type){
      if(type == 0){
        return 'Apéritif';
      }
      else if(type == 1){
        return 'Entrée';
      }
      else if(type == 2){
        return 'Plat principal';
      }
      else if(type == 3){
        return 'Dessert';
      }
      else if(type == 4){
        return 'Picnic';
      }
    };

});
