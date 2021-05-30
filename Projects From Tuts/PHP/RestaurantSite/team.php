<?php 
define("TITLE", "Team");

include('./includes/header.php'); 
?> 
<div id="team-members" class="cf">
    <h1>Our Team at Franklin's</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi laboriosam error sequi. Id fugiat, commodi voluptatum ipsa quos nulla quia vel, ab rem vitae voluptates, modi iure dignissimos. Nesciunt!
    Corrupti expedita quidem nobis. Error inventore itaque dolorum recusandae sint, modi voluptatibus illum maxime ratione? Aliquid repellendus eveniet id assumenda dolor, explicabo accusantium laborum mollitia, esse totam distinctio pariatur inventore!</p>
<hr>

<?php 

    foreach($team as $teamMember){
     ?>
    <div class="member">
        <img src="img/<?php echo $teamMember["img"];?>.png" alt="<?php echo $teamMember["name"];?>">
        <h2><?php echo $teamMember["name"];?></h2>
        <p><?php echo $teamMember["bio"];?></p>

    </div>
        <?php
    }
?>

</div>
<hr>

<?php include('./includes/footer.php'); ?> 
