<?php
/*
    Template Name: Home
 */

get_header();
?>
<div id="home" class="container-fluid">
      <div class="container-fluid hero">
        <div class="col-6 logo">
          <img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/PAS_HERO_LOGO_LG.png" />
        </div>
      </div>
      <div class="container-fluid callta row">
        <div class="col col-sm-12"><p class="callta-text">To access important resources regarding COVID-19 <button class="btn btn-primary" type="button">COVID-19 Resources</button></p></div>
      </div>
      <div class="container-fluid rescont">  
        <div class="row resrow">
          <div class="resheader"><h2>Resources</h2></div>
          <div class="mainres col-md-3 col-sm-12"><a href="#"><i class="fas fa-envelope fa-5x"></i><h3>Contact</h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="#"><i class="fas fa-university fa-5x"></i> <h3>Constituent </br> Services</h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="#"><i class="fas fas fa-vote-yea fa-5x"></i> </i> <h3>Voter </br>Registration</h3></a></div>
          <div class="mainres col-md-3 col-sm-12"><a href="#"><i class="fas fas fa-clipboard-list fa-5x"></i> </i> <h3>Absentee Ballot</h3></a></div>
        </div>
      </div>
    
      </div>






<?php get_footer();
?>
