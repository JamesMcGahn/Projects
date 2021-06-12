<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paul_Sarlo
 */

get_header();
?>
<main id="primary" class="site-main">
<div class="container-fluid legi">
    <div class="row">
        <div class="col-md-2"></div>
        <div id="legicontainer" class="col-md-8 col-sm-12 col-12 ">
	


		<?php if ( have_posts() ) : ?>

			<header class="page-header card mb-4">
				<?php
				the_archive_title( '<h1 class="page-title">Archive For the ', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;
		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

<div class="row">
			<div class="col-3 rollPagination"><?php previous_posts_link();   ?></div>
			<div class="col-7"></div>
			<div class="col-2 rollPagination"><?php next_posts_link(); ?></div>
		</div>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>

</div>
	</main><!-- #main -->

<?php

get_footer();
