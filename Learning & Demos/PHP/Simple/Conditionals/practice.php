<?php
	
	// Constants
	define("TITLE", "Conditionals");
	
	// Custom Variables
$species = "turkey";
$language = "chinese";
$yearsOnEarth = 190;
?>

<!DOCTYPE html>
<html>
	<head>
		<title>PHP <!-- TITLE --></title>
		<link href="../VarsConstants/styles.css" rel="stylesheet">
	</head>
	<body>
		<div class="wrapper">
			<a href="/" title="Back to directory" id="logo">
				<img src="../assets/img/logo.png" alt="PHP">
			</a>
			
			<h1>Get Your Hands Dirty: <small><?php echo TITLE ?></small></h1>
			<hr>
			
			<h2>Your Example</h2>
			
			<div class="sandbox">
			<?php
				if($species == "Rhino") {
					echo "<p>Hi Rhino</p>";
				} elseif ($species == "human") {
					echo "<p>hi human</p>";
				} else {
					echo "<p>hi alien</p>";
				}
				?>
			</div><!-- end sandbox -->
			
			<a href="index.php" class="button">Back to the lecture</a>
			
			<hr>
			
			<small>&copy;<?php Date('Y') ?></small>
		</div><!-- end wrapper -->
		
	</body>
</html>
