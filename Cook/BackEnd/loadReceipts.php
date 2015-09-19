<?php
	include 'connectDB.php';

	$response = $db->prepare('select distinct * from recipe join cooks where cookId = cooks.idCook order by title');
 	$response->execute();
 	$recipe = array();

 	while($result = $response->fetch()){
 		$tmp = new stdClass();
 		$tmp->id = $result['idRecipe'];
 		$tmp->title = iconv("ISO-8859-1","UTF-8", $result['title']);
 		$tmp->image = $result['image'];
 		$tmp->difficulty = $result['difficulty'];
 		$tmp->time = $result['time'];
 		$tmp->cookId = $result['cookId'];
 		$tmp->type = $result['type'];
 		$tmp->nbOfPersons = $result['nbOfPersons'];
 		$cook = new stdClass();
 		$cook->idCook = $result['idCook'];
 		$cook->name = iconv("ISO-8859-1","UTF-8", $result['name']);
 		$tmp->cook = $cook;
 		$recipe.array_push($recipe, $tmp);
 	}
 	echo json_encode($recipe);
?>


