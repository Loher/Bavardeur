<?php
	include 'connectDB.php';

	$response = $db->prepare('select * from cooks order by cooks.name');
 	$response->execute();
 	$cooks = array();

 	while($result = $response->fetch()){
 		$tmp = new stdClass();
 		$tmp->id = $result['idCook'];
 		$tmp->name = iconv("ISO-8859-1","UTF-8", $result['name']);
 		$tmp->picture = $result['picture'];

 		$response2 = $db->prepare('select count(*) from recipe where cookId = ?');
 		$response2->execute([$result['idCook']]);

 		$tmp->nbOfReceipts = $response2->fetch()[0];
		$cooks.array_push($cooks, $tmp);
 	}
 	echo json_encode($cooks);
?>


