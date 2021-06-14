<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Paul_Sarlo
 */

get_header();
?>
<div id="home" class="container-fluid">
<div class="row headerImage align-items-center">
    <div class="col-12 headerImageText">
                <h1 id="searchh1" class="text-center">Search Results For: </h1>
				<h4 class="text-center"><?php echo get_search_query(); ?></h4>
            </div>
    </div>
<div class="container-fluid posts">
    <div class="row">
        <div class="col-md-2"></div>
        <div id="postscontainer" class="col-md-8 col-sm-12 col-12 ">
	<main id="primary" class="site-main">

		<?php if ( have_posts() ) : ?>


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

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #main -->
	</div>
        <div class="col-md-1"></div>
    </div>
</div>
	</div>
<?php

get_footer();
