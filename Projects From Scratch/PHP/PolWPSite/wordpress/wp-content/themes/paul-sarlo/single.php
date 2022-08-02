<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Paul_Sarlo
 */
$header_image = get_post_field('header_image', $post-> ID, 'display');
$postTitle = get_the_title($post-> ID);
get_header();
?>


<div id="home" class="container-fluid">
<div class="row headerImage align-items-center" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 15%, rgba(0, 0, 0, 0.8) 100%), url('<?php echo wp_get_attachment_url( $header_image); ?>');">

    <div class="col-12 headerImageText">
        <?php if(strlen($postTitle) > 60) { 
            echo '<h3 class="text-center">' . $postTitle  .'</h3>';
        } else {
            echo '<h1 class="text-center">' . $postTitle .'</h1>';
         } ?>

            </div>
    </div>
<div class="container-fluid post">
    <div class="row">
        <div class="col-md-1"></div>
        <div id="postcontainer" class="col-md-10 col-sm-12 ">
		

<?php
while ( have_posts() ) :
	
	the_post();
	
	
	get_template_part( 'template-parts/content', get_post_type() );

	
	if(get_post_type() === 'resource') {$navText = 'Resource: ';} 
	if(get_post_type() === 'post') {$navText = 'Release: ';} 

	the_post_navigation(
		array(
			'prev_text' => '<span class="nav-subtitle"><i class="fas fa-chevron-left"></i>' .  ' Previous ' . $navText . '</span> <span class="nav-title">%title</span>',
			'next_text' => '<span class="nav-subtitle"><i class="fas fa-chevron-right"></i>' . ' Next  ' . $navText . '</span> <span class="nav-title">%title</span>',
		)
	);
	 
endwhile; // End of the loop.
?>


        </div>
        <div class="col-md-1"></div>
    </div>
</div>

</div>





<?php
get_footer();
