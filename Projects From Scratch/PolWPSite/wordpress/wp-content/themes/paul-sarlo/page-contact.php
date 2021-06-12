<?php
/*
    Template Name: Contact
 */

get_header();
?>
<div id="home" class="container-fluid">
<div class="container-fluid legi">
    <div class="row">
        <div class="col-md-1"></div>
        <div id="legicontainer" class="col-md-10 col-sm-12 ">
        <div class="row contactheader">
                <h1><?php the_title(); ?></h1>
            </div>
            
            <div class="card contactcontent">
            <div class="clearfix">
            <iframe  
            frameborder="0" style="border:0" id="contactmap"  class="col-12 col-sm-12 col-md-6 float-md-end mb-3 ms-md-3"
            src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyD72kMynSteYlxQAU9yGvrI70JZHX1tR1w&location=40.8473501,-74.0830352&heading=215.11&pitch=10" allowfullscreen>
            </iframe>
            <div>
            <h4>Office Location:<h4>
            <address>
            <p>123 Cheeseburger Street</p>
            <p>123 Cheeseburger Street</p>
            <p>Phone: <a href="tel:+1234567891">123-456-7894</a></p>
            <p>Email: <a href="mailto:ham@hamsandwhich.com">ham@hamsandwhich.com</a></p>
            <a target="_blank" href="https://www.google.com/maps/place/496+Columbia+Blvd,+Wood-Ridge,+NJ+07075/@40.8471054,-74.0854626,17z"> Directions &raquo;</a>   
            </address>
            </div>
        </div>
        <?php the_content(); ?>
    </div>
    </div>
    <div class="col-md-2"></div>
</div>

</div>


<?php
get_footer();
?>