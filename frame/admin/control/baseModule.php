<?php
	include_once("connect_db.php");
	$moduleName = $_POST["moduleName"];
	$code = $_POST["code"];
	if((($_FILES["file"]["type"] == "images/gif") || ($_FILES["file"]["type"] == "image/jpeg") || ($_FILES["file"]["type"] == "image/pjpeg"))&& ($_FILES["file"]["size"] < 20000)){
		if($_FILES["file"]["error"] > 0){
			echo $_FILES["file"]["error"];
		} else {
		    if(file_exists("../upload/".$_FILES["file"]["name"])){
		    	echo $_FILES["file"]["name"] . "already exists.";
		    } else {
		    	move_uploaded_file($_FILES["file"]["tmp_name"], "../upload/".date("YmdHm").$_FILES["file"]["name"]);
		   		$imgUrl = "upload/".date("YmdHm").$_FILES["file"]["name"];
		    }
		}
	}
	if(!empty($moduleName) && !empty($imgUrl) && !empty($code)) {
		mysql_query("insert into basemodule"
		."(imgeurl,code,moudle_name)"
		."values('".$imgUrl."','".$code."','".$moduleName."')"
		) or die(mysql_error());
		$url = "http://".$_SERVER["HTTP_HOST"]."/frame/admin/temeplate/base_module.html";
		echo "<script>alert('success');window.location.href='".$url."';</script>";
	}
?>