<?php
	include 'connectDB.php';
	
	$response = $db->prepare('select * from cooks where name = ? and password = ?');
 	$response->execute(array($_GET["usr"], $_GET["pwd"]));
 	$cook = new stdClass();

 	while($result = $response->fetch()){
 		$cook->id = $result['idCook'];
 		$cook->name = iconv("ISO-8859-1","UTF-8", $result['name']);
 		$cook->picture = $result['picture'];
 	}
 	echo json_encode($cook);
?>


