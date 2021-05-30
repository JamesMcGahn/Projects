<?php 
include('./includes/arrays.php');
$companyName = "Franklin's Fine Dining";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo TITLE; ?></title>
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
  <body id="final-example">
    <div class="wrapper">
      <div id="banner">
        <a href="/index.php" title="Return to Home"><img src="./img/banner.png" alt="Franlin's Dinner"></a>
      </div>
      <div id="nav">
            <?php include('./includes/nav.php'); ?> 
      </div>
      <div class="content">