<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paul_Sarlo
 */
$display_featured_image = get_post_field('display_featured_image', $post-> ID, 'edit'  );



?>


<article  id="post-<?php the_ID(); ?>" <?php post_class("col-md-12 col-sm-12 card"); ?>>
	<div class="entry-header row bioheader">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title postheader">', '</h1>' );
		else :
			the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php
				paul_sarlo_posted_on();
				paul_sarlo_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</div><!-- .entry-header -->
	<div class="row biocontent">
		<?php if($display_featured_image) { ?>
	<div class="row justify-content-center">
		<div class="col-md-10 col-sm-10 "><img class="postimage" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>"></div>
	</div>
			<?php } else {}?>

	<div class="row justify-content-center">
	<div class="col-md-9 col-sm-12 bio"> 
	<?php the_content(); ?>
	</div>
	</div>
		
		</div>
</article><!-- #post-<?php the_ID(); ?> -->
