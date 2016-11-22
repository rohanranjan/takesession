<?php
header('Access-Control-Allow-Origin: *'); 

$errors = array();

$data = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);


// checking for blank values.
if (empty($_POST['username']))
  $errors['username'] = 'Username is required.';

if (empty($_POST['password']))
  $errors['password'] = 'Password is required.';

if (!empty($errors)) {
  $data['errors']  = $_POST['username'];//$errors;
} else {
	if($_POST['username']=="rohan" && $_POST['password']=="12345678"){
  		$data['message'] = 'success';
	}else{
		$data['message']='Login UnsuccessFull';
	}
}
// response back.
echo json_encode($data);
?>