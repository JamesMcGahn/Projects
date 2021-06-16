<?php
/*
    Template Name: Contact
 */

$APIKEY = get_field('google_map_key');
$AddressLine1 = get_field('address_line_1');
$AddressLine2 = get_field('address_line_2');
$phone = get_field('contact_phone');
$email = get_field('contact_email');
$directions = get_field('contact_directions');
$header_image = get_field('header_image');
get_header();
?>
<div id="home" class="container-fluid">
<div class="row headerImage align-items-center" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.8) 100%), url('<?php echo $header_image ?>');">
    <div class="col-12 headerImageText">
                <h1 class="text-center"><?php the_title(); ?></h1>
            </div>
    </div>
<div class="container-fluid contact">
    <div class="row">
        <div class="col-md-1"></div>
        <div id="contactcontainer" class="col-md-10 col-sm-12 ">

            
            <div class="card contactcontent">
            <div class="clearfix">
            <iframe  
            frameborder="0" style="border:0" id="contactmap"  class="col-12 col-sm-12 col-md-6 float-md-end mb-3 ms-md-3"
            src="https://www.google.com/maps/embed/v1/streetview?key=<?php echo $APIKEY;?>&location=40.8473501,-74.0830352&heading=215.11&pitch=10" allowfullscreen>
            </iframe>
            <div>
            <h4>Office Location:</h4>
            <address>
            <p><?php echo $AddressLine1 ?></p>
            <p><?php echo $AddressLine2 ?></p>
            <p>Phone: <a href="tel:+<?php echo $phone?>"><?php echo $phone ?></a></p>
            <p>Email: <a href="mailto:<?php echo $email ?>"><?php echo $email ?></a></p>
            <p><strong><a target="_blank" href="<?php echo $directions ?>"> Directions to the Office &raquo;</a></strong>   </p>
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