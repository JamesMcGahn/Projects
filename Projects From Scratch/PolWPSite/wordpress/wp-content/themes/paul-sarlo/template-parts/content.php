<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paul_Sarlo
 */
$display_featured_image = get_post_field('display_featured_image', $post-> ID, 'edit'  );
$display_featured_image_BlogRoll = get_post_field('display_featured_image_br', $post-> ID, 'edit'  );




?>


<article  id="post-<?php the_ID(); ?>" <?php post_class("col-md-12 col-sm-12 card container-fluid" ); ?>>
	<div class="entry-header row bioheader">
		<?php
		if ( is_singular() ) :
			the_title( '<h3 class="entry-title postheader">', '</h3>' );
		else :
			the_title( '<h3 class="entry-title blogrollheader"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta row ">
				<div class="col-6"><?php paul_sarlo_posted_on();?></div>
				<div class="col-6"><h5>Contact:</h5><p>(609) 847-3700</p></div>

			</div><!-- .entry-meta -->
		<?php endif; ?>
	</div><!-- .entry-header -->
	<div class="row biocontent justify-content-center">
		<!-- Featured Image -->
	
	<?php 
	if ( is_singular() && $display_featured_image ) : ?>
		<div class="row justify-content-center">
		<div class="col-md-6 col-sm-12 "><img class=" img-fluid" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>"></div>
		</div>
		<?php 	elseif(!is_singular() && $display_featured_image_BlogRoll ) : ?>
			<div class="row justify-content-center">
			<div class="col-md-6 col-sm-12 "><img class="postimage img-fluid" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>"></div>	
			</div>
		<?php else : 

		
			endif;

	?>	




	
			
<!-- Content -->
	<div class="row justify-content-center">
	<div class="col-12"> 
		<?php 
	if ( is_singular() ) :
			the_content();
		else :
			echo '<h6>Excerpt:</h6>',
			the_excerpt();
		endif;

	?>	
	</div>
	</div>
		
		</div>
</article><!-- #post-<?php the_ID(); ?> -->
