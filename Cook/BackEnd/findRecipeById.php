<?php
	include 'connectDB.php';

	$response = $db->prepare('select * from recipe where idRecipe = ?');
 	$response->execute(array($_GET["recipeId"]));
 	$recipe = new stdClass();
 	

 	while($result = $response->fetch()){
 		$recipe->id = $result['idRecipe'];
 		$recipe->title = iconv("ISO-8859-1","UTF-8", $result['title']);
 		$recipe->image = $result['image'];
 		$recipe->difficulty = $result['difficulty'];
 		$recipe->time = $result['time'];
 		$recipe->type = $result['type'];
 		$recipe->nbOfPersons = $result['nbOfPersons'];
 		$recipe->cookId = $result['cookId'];

 		$response2 = $db->prepare('select * from ingredient where recipeId = ?');
 		$response2->execute(array($_GET["recipeId"]));
 		$ingredients = array();
 		while($res = $response2->fetch()){
 			$tmp = new stdClass();		
 			$tmp = iconv("ISO-8859-1","UTF-8", $res['ingredient']);
 			$ingredients.array_push($ingredients, $tmp);
 		}
 		$recipe->ingredients = $ingredients;

 		$response3 = $db->prepare('select * from step where recipeId = ?');
 		$response3->execute(array($_GET["recipeId"]));
 		$steps = array();
 		while($res = $response3->fetch()){
 			$tmp = new stdClass();		
 			$tmp = iconv("ISO-8859-1","UTF-8",$res['description']);
 			$steps.array_push($steps, $tmp);
 		}
 		$recipe->steps = $steps;

 		$response4 = $db->prepare('select * from cooks where idCook = ?');
 		$response4->execute(array($result['cookId']));
 		$cook = new stdClass();
 		while($cookResult = $response4->fetch()){
 			$cook->name = $cookResult['name'];
 			$cook->id = $cookResult['idCook'];
 		}

 		$recipe->cook = $cook;
 		
 	}
 	echo json_encode($recipe);
?>


