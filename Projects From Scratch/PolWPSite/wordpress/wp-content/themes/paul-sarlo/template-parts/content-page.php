<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paul_Sarlo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('mb-3 col-md-12 col-sm-12 card container-fluid articlediv'); ?>>
	<div class="clearfix">
	<img class=" col-12 col-sm-12 col-md-6 float-md-end mb-2 ms-md-3 mt-3" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>">
	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'paul-sarlo' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->
	</div>


	
</article><!-- #post-<?php the_ID(); ?> -->
<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit This Page <span class="screen-reader-text">%s</span>', 'paul-sarlo' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>