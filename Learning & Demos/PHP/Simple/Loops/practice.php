<?php
	
	// Constants
	define("TITLE", "Loops");
	
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
				<img src="../assets/img/logo.png" alt="PHP">
			</a>
			
			<h1>Get Your Hands Dirty: <small><?php echo TITLE ?></small></h1>
			<hr>
			
			<h2>Your Example</h2>
			
			<div class="sandbox">
			<?php
					$start = 0;
					while ($start < 10) {
						echo $start . "</br>";
						$start++;
					}

			for($a = 10; $a > 1; $a--) {
				echo $a;
			};

			foreach($gentleman as $person) {
				echo "</>" . $person['first_name'] ."</br>";
			};

			$i = 0;
			do {
				echo $i;
				$i++;
			} while ( $i < 10 );

				?>
			</div><!-- end sandbox -->
			
			<a href="index.php" class="button">Back to the lecture</a>
			
			<hr>
			
			<small>&copy;<?php Date('Y') ?></small>
		</div><!-- end wrapper -->
		
	</body>
</html>
