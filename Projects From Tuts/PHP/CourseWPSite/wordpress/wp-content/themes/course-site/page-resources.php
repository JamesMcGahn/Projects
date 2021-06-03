<?php
/*
    Template Name: Home
 */

$thumbnailUrl = wp_get_attachment_url( get_post_thumbnail_id( $post-> ID));


get_header();
?>
<!-- FEATURE IMAGE
	================================================== -->
	<?php if( has_post_thumbnail() ) { ?>
		<section class="feature-image" style="background:url('<?php echo $thumbnailUrl; ?>') no-repeat; background-size: cover;" data-type="background" data-speed="2">
		<h1>Resources</h1>
	</section>

	<?php } else { ?>
		<section class="feature-image feature-image-default" data-type="background" data-speed="2">
		<h1>Resources</h1>
	</section>

	<?php } ?>
    
    
    <!-- MAIN CONTENT
	================================================== -->
    <div class="container">
	    <div class="row" id="primary">
	    
		    <div id="content" class="col-sm-12">
			    
			    <section class="main-content">

				<?php while (have_posts()) : the_post(); ?>
				<?php the_content(); ?>

				<?php endwhile; ?>
			    	
				<hr>
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
					    	<?php the_content(); ?>
							<?php if (!empty($resource_text)) { ?>
							<a href="#" class="btn btn-success"><?php echo $resource_text; ?></a>
					    	<?php } ?>
				    	</div>


					<?php endwhile; ?>
	

			    	</div>
			    </section>
		    	
		    </div><!-- content -->
		    	    
	    </div><!-- primary -->
    </div><!-- container -->
	
	


<?php
get_footer();
?>