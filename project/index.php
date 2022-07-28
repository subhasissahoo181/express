<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the post records
$server = $_POST['server'];
$portnumber = $_POST['portnumber'];
$UserName = $_POST['UserName'];
$Password = $_POST['Password'];
$uploadfile = $_POST['uploadfile'];


// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Id`, `server`, `portnumber`, `UserName`, `Password`, `uploadfile`) VALUES ('0', '$server', '$portnumber', '$UserName', '$Password', '$uploadfile')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>