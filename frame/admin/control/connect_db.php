<?php
	$links = mysql_connect("localhost","root","");
	if(!$links){
		die("Could not connect:".mysql_error());
	}
	mysql_select_db("frame");
?>