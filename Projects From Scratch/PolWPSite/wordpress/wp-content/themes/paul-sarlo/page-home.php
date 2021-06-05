<?php
/*
    Template Name: Home
 */

 // call to action 
$call_to_action_text = get_field('call_to_action_text');
$call_to_action_button = get_field('call_to_action_button');
$call_to_action_link = get_field('call_to_action_link');

// resources item set
$resource_item_1_link = get_field('resource_item_1_link');
$resource_item_1_icon = get_field('resource_item_1_icon');
$resource_item_1_text = get_field('resource_item_1_text');
$resource_item_2_link = get_field('resource_item_2_link');
$resource_item_2_icon = get_field('resource_item_2_icon');
$resource_item_2_text = get_field('resource_item_2_text');
$resource_item_3_link = get_field('resource_item_3_link');
$resource_item_3_icon = get_field('resource_item_3_icon');
$resource_item_3_text = get_field('resource_item_3_text');
$resource_item_4_link = get_field('resource_item_4_link');
$resource_item_4_icon = get_field('resource_item_4_icon');
$resource_item_4_text = get_field('resource_item_4_text');
//resource title
$resource_section_title = get_field('resource_section_title');
// resource Button
$resource_section_button_text = get_field('resource_section_button_text');
$resource_section_button_link = get_field('resource_section_button_link');


get_header();
?>
<div id="home" class="container-fluid">
      <div class="container-fluid hero">
        <div class="col-6 logo">
          <img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/PAS_HERO_LOGO_LG.png" />
        </div>
      </div>
      <div class="container-fluid callta row">
        <div class="col col-sm-12"><p class="callta-text"><?php echo $call_to_action_text ?><a href="<?php echo $call_to_action_link ?>"><button class="btn btn-primary" type="button"><?php echo $call_to_action_button ?></button></a></p></div>
      </div>
      <div class="container-fluid rescont">  
        <div class="row resrow">
          <div class="resheader"><h2><?php echo $resource_section_title ?></h2></div>
          <div class="mainres col-md-3 col-sm-12"><a href="<?php echo $resource_item_1_link ?>"><i class="fas <?php echo $resource_item_1_icon ?> fa-5x"></i><h3><?php echo $resource_item_1_text ?></h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="<?php echo $resource_item_2_link ?>"><i class="fas <?php echo $resource_item_2_icon ?> fa-5x"></i><h3><?php echo $resource_item_2_text ?></h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="<?php echo $resource_item_3_link ?>"><i class="fas <?php echo $resource_item_3_icon ?> fa-5x"></i><h3><?php echo $resource_item_3_text ?></h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="<?php echo $resource_item_4_link ?>"><i class="fas <?php echo $resource_item_4_icon ?> fa-5x"></i><h3><?php echo $resource_item_4_text ?></h3></a></div> 
        </div>
        <div class="row resrow resbtn">
            <div class="col-12 "><a href="<?php echo $resource_section_button_link ?>"><button class="btn btn-primary" type="button"><?php echo $resource_section_button_text?></button></a></div>
          </div>
      </div>
    
      </div>

<?php get_footer();
?>
