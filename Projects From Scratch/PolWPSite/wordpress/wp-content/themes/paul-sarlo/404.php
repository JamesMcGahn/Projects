<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Paul_Sarlo
 */

get_header();
?>
<div id="home" class="container-fluid">
<div class="row headerImage align-items-center">
    <div class="col-12 headerImageText">
                <h1 class="text-center">Oops! That page can&rsquo;t be found.</h1>
            </div>
    </div>
<div class="container-fluid fourOFour">

    <div class="row">
        <div class="col-md-1"></div>
        <div id="fourOFour" class="col-md-10 col-sm-12 col-12 ">
	<main id="primary" class="site-main card">


			<div class="page-content container">
					<div class="row fourOFourHeadtext">
					
						<div class="col-12">
							<h5>Try searching with new keywords</h5> <h5>Maybe check out some of the most recent Press Releases Below?</h5>
							</div>
					</div>

					

					<div class="card-group mb-3">


					<?php $loop = new WP_Query( array( 'post_type' => 'post', 'orderby' => 'post_id', 'order' => 'DESC', 'posts_per_page' => 3 )); ?>				    
					<?php while ( $loop-> have_posts() ) : $loop->the_post();  
                            $thumbnailUrl = wp_get_attachment_url( get_post_thumbnail_id( $post-> ID));

								?>
					
					
                            <div class="card">
                            <a href="<?php echo get_permalink();?>"> <img src="<?php if(empty($thumbnailUrl)){echo bloginfo( 'stylesheet_directory'); ?>/assets/img/american_flag_stock.jpeg <?php } else{echo $thumbnailUrl;} ?>" class="card-img-top fourOFourImg" alt="..."></a>
                                <div class="card-body">
                                    <h5 class="card-title fourOFour-title"><a href="<?php echo get_permalink();?>"> <?php the_title(); ?></a></h5>
                                    <p class="card-text fourOFour-text"><?php the_excerpt(); ?></p>
									</div>
									<div class="card-footer">
      									<small class="text-muted">Last updated 3 mins ago</small>
    								</div>
                            </div>
                        

                        <?php endwhile;  wp_reset_query();?>
						</div></div>
					

			</div><!-- .page-content -->
		</section><!-- .error-404 -->



		</div>
        <div class="col-md-2"></div>
    </div>
</div>

</div>
	</main><!-- #main -->

<?php
get_footer();

?>
