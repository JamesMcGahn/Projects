<?php

	// Constants
define("TITLE", "Arrays");

	// Variables
$my_name = "James";
	
	// Arrays
	$age_group = array("child", "teen", "adult");

$handlebar = array(
	"name" => "handlebar",
	"color" => "black"
);

$gotee = array(
	"name" => "gotee",
	"color" => "black"
);

$soul_patch = array(
	"name" => "soul_patch",
	"color" => "black"
);


$gentleman = array(
	array(
		"first_name" => "Bob",
		"country" => "USA"
	),
	array(
		"first_name" => "Cheese",
		"country" => "CA"
	),	array(
		"first_name" => "Ham",
		"country" => "CN"
	),
)

?>

<!DOCTYPE html>
<html>
	<head>
		<title><?php echo TITLE ?></title>
		<link href="../VarsConstants/styles.css" rel="stylesheet">
	</head>
	<body>
		<div class="wrapper">
			<a href="/" title="Back to directory" id="logo">
				<img src="/assets/img/logo.png" alt="PHP">
			</a>
			
			<h1>Get Your Hands Dirty: <small><?php echo TITLE ?></small></h1>
			<hr>
			
			<h2>Your Example</h2>
			
			<div class="sandbox">
				
				<h3><?php echo $gentleman[0]["first_name"], " from ", $gentleman[0]["country"] ?></h3>
				<p><?php echo $gentleman[0]["first_name"], " is an ", $age_group[2] ?></p>
				<h3><?php echo $gentleman[1]["first_name"], " from ", $gentleman[1]["country"] ?></h3>
				<p><?php echo $gentleman[1]["first_name"], " is an ", $age_group[1] ?></p>
				<h3><?php echo $gentleman[2]["first_name"], " from ", $gentleman[2]["country"] ?></h3>
				<p><?php echo $gentleman[2]["first_name"], " is an ", $age_group[0] ?></p>

			</div><!-- end sandbox -->
			
			<a href="index.php" class="button">Back to the final example</a>
			
			<div class="navs cf">
				<a href="" class="button prev">Previous Lecture</a>
				<a href="" class="button next">Next Lecture</a>
			</div><!-- end navs -->
			
			<hr>
			
			<small>&copy;<?php echo Date('Y'), " ", $my_name ?></small>
		</div><!-- end wrapper -->
		
	</body>
</html>
