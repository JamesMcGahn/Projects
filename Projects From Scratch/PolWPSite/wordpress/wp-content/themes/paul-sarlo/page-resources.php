<?php
/*
    Template Name: Resources
 */

get_header();
?>

<div id="home" class="container-fluid">
<div class="container-fluid legi">
    <div class="row">
        <div class="col-md-1"></div>
        <div id="legicontainer" class="col-md-10 col-sm-12 ">

            <div class="row legiheader">
                <h1><?php the_title(); ?></h1>
            </div>
            <div class="row legicontent">
                <div class="row row-cols-sm-2  row-cols-md-3  g-4">

                <?php $constService = get_post(60, ARRAY_A);
                             $consthumbnailUrl = wp_get_attachment_url( get_post_thumbnail_id( 60));
                ?>
                <div class="col">
                            <div class="card h-100">
                            <a href="<?php echo get_permalink(60)?>"><img src="<?php echo $consthumbnailUrl ?>" class="card-img-top img-card-res" alt="..."></a>
                                <div class="card-body">
                                    <h5 class="card-title resourceP-title"><a href="<?php echo get_permalink(60)?>"> <?php echo $constService["post_title"]; ?></a></h5>
                                    <p class="card-text resourceP-text"><?php echo $constService["post_excerpt"]; ?></p>
                                </div>
                            </div>
                        </div>
                <?php wp_reset_query(); ?>

                <?php $loop = new WP_Query( array( 'post_type' => 'resource', 'orderby' => 'post_id', 'order' => 'ASC')); ?>				    
					<?php while ( $loop-> have_posts() ) : $loop->the_post();  
                            $thumbnailUrl = wp_get_attachment_url( get_post_thumbnail_id( $post-> ID));
                            ?>
                        <div class="col">
                            <div class="card h-100">
                            <a href="<?php echo get_permalink()?>"> <img src="<?php echo $thumbnailUrl ?>" class="card-img-top img-card-res" alt="..."></a>
                                <div class="card-body">
                                    <h5 class="card-title resourceP-title"><a href="<?php echo get_permalink()?>"> <?php the_title(); ?></a></h5>
                                    <p class="card-text resourceP-text"><?php the_excerpt(); ?></p>
                                </div>
                            </div>
                        </div>

                        <?php endwhile;  wp_reset_query();?>

                    </div>
                <div class="row">
                    <div class="col-12"> 
                </div>       
                </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>

</div>



<?php
get_footer();
?>