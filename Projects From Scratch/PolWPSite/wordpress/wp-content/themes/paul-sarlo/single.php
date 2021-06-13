<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Paul_Sarlo
 */

get_header();
?>


<div id="home" class="container-fluid">
<div class="row headerImage align-items-center">
    <div class="col-12 headerImageText">
                <h1 class="text-center"><?php the_title(); ?></h1>
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
