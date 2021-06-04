<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Course_Site
 */

get_header();
?>

<section class="feature-image feature-image-default" data-type="background" data-speed="2">
		<h1>Cant Find That Page...</h1>
	</section>
	<div class="container">
      <div class="row" id="primary">
        <main id="content" class="col-sm-8">
<div class="error-404 not-found"> 
 <div class="page-content">
	<h2>But.. dont worry we are here to help</h2>
	
	<h3>Resources</h3>
	<?php $loop = new WP_Query( array( 'post_type' => 'resource', 'orderby' => 'post_id', 'order' => 'ASC')); ?>
					
			    	<div class="resource-row clearfix">
				    
					<?php while ( $loop-> have_posts() ) : $loop->the_post(); 
					
					$resource_url = get_field('resource_url');
					$resource_image = get_field('resource_image');
					$resource_text = get_field('button_text');
					
					?>
					<div class="resource">

							<img src="<?php echo $resource_image['url']; ?>" alt="<?php echo $resource_image['alt']; ?>">
					    	<h3><a href="<?php echo $resource_url; ?>"><?php the_title(); ?></a></h3>
					    	<?php the_excerpt(); ?>
							<?php if (!empty($resource_text)) { ?>
							<a href="#" class="btn btn-success"><?php echo $resource_text; ?></a>
					    	<?php } ?>
				    	</div>


					<?php endwhile; wp_reset_query(); ?>

 </div>
 <h3>Categories</h3>	
 <div class="widget widget_categories">
	 <h4 class="widget_title">Most Used Categories</h4>
	 <ul> <?php wp_list_categories(
		 array(
			 'orderby' => 'count',
			 'order' => 'DESC',
			 'show_count' => 1,
			 'title_li' => '',
			 'number' => 10

		 )
	 ) ?></ul>
	 
 </div>	
 <h3>Archives</h3>
 <?php the_widget('WP_Widget_Archives', 'title=Archives', 'before_title=</h4 class="widgettitle">&after_title=</h4>'); ?>
</div>
		</main>
		<aside class="col-sm-4">
	<?php get_sidebar(); ?>
	</aside>
</div>
</div>

<?php
get_footer();
