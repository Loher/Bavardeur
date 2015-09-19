<?php
	include 'connectDB.php';

	$response = $db->prepare('select * from cooks where idCook = ?');
 	$response->execute(array($_GET["cookId"]));
 	$cook = new stdClass();

 	while($result = $response->fetch()){
 		$cook->id = $result['idCook'];
 		$cook->name = iconv("ISO-8859-1","UTF-8", $result['name']);
 		$cook->picture = $result['picture'];

 		$response2 = $db->prepare('select * from recipe where cookId = ?');
 		$response2->execute(array($_GET["cookId"]));
 		$receipts = array();
 		while($res = $response2->fetch()){
 			$tmp = new stdClass();
	 		$tmp->id = $res['idRecipe'];
	 		$tmp->title = iconv("ISO-8859-1","UTF-8", $res['title']);
	 		$tmp->image = $res['image'];
	 		$tmp->difficulty = $res['difficulty'];
	 		$tmp->time = $res['time'];
	 		$tmp->cookId = $res['cookId'];
	 		$tmp->type = $res['type'];
	 		$tmp->nbOfPersons = $res['nbOfPersons'];
	 		$receipts.array_push($receipts, $tmp);
 		}
 		$cook->receipts = $receipts;
 	}
 	echo json_encode($cook);
?>


