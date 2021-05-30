<?php 

define("TITLE", "Menu");
include('./includes/header.php'); ?> 

<div id="menu-items">

<h1>Our Delicious Menu</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, expedita officia?</p>
<p><em>Click any menu item to learn more</em></p>

<hr>
<ul>
<?php foreach ($menuItems as $dish => $item ) {?>

<li><a href="dish.php?item=<?php echo $dish; ?>"><?php echo $item["title"], " <sup>$</sup>" , $item["price"]; ?></a></li>

<?php } ?>
</ul>
</div>

<?php include('./includes/footer.php'); ?> 