<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paul_Sarlo
 */
$usesidebar = get_post_field('usesidebar', $post-> ID, 'edit'  );
$header_image = get_post_field('header_image', $post-> ID, 'display');


get_header();
?>

<div id="home" class="container-fluid">
<div class="row headerImage align-items-center" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 15%, rgba(0, 0, 0, 0.8) 100%), url('<?php echo wp_get_attachment_url( $header_image); ?>');">
    <div class="col-12 headerImageText">
                <h1 class="text-center"><?php the_title(); ?></h1>
            </div>
    </div>
<div class="container-fluid page">
    <div id="pagecontent" class="row">
	<div class="col-md-1"></div>
	<?php if($usesidebar) { ?>
        <div id="pagecontainer" class="col-md-8 col-sm-12 ">
	<?php }  else { ?>
	<div id="pagecontainer" class="col-md-10 col-sm-12 ">
	
	<?php  }  ?>




		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>
	</main><!-- #main -->
	</div>
<?php if($usesidebar) { ?>
	<div class="col-md-3">
	<?php get_sidebar(); 
}  else { ?>
<div class="col-md-1">
<?php }  ?>

       
    </div>
</div>
	</div>
<?php

get_footer();
