<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Course_Site
 */

get_header();
?>

<section class="feature-image feature-image-default-alt" data-type="background" data-speed="2">
<?php if ( have_posts() ) : ?>
<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Search Results for: %s', 'course-site' ), '<span>' . get_search_query() . '</span>' );
					?>
	</section>
	<div class="container">
      <div class="row" id="primary">
        <main id="content" class="col-sm-8" role="main">


			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				get_template_part( 'template-parts/content', 'search' );

			endwhile;

			the_posts_navigation();

		else :
			
			get_template_part( 'template-parts/content', 'search' );

		endif;
		?>

</main>
		<aside class="col-sm-4">
		<?php get_sidebar(); ?>
			</aside>
	  </div>
	</div>
	

	

<?php

get_footer();
