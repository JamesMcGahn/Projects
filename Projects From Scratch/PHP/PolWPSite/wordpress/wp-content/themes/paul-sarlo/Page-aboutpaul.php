<?php
/*
    Template Name: About Paul
 */
$header_image = get_field('header_image');
get_header();
?>
    <div id="home" class="container-fluid">
    <div class="row headerImage align-items-center" style="background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 15%, rgba(0, 0, 0, 0.8) 100%), url('<?php echo $header_image ?>');">
    <div class="col-12 headerImageText">
                <h1 class="text-center"><?php the_title(); ?></h1>
            </div>
    </div>
        <div class="container-fluid about">
            <div class="row">
            
                <div class="col-md-2"></div>

                <div id="biocontainer" class="col-md-8 col-sm-12 card">

                    <div class="row bioheader">
                        
                    </div>
                    <div class="row biocontent">
                        <div class="row">
                        <div class="clearfix">
                        <img  class="col-6 col-md-6 float-md-end mb-3 ms-md-3" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>">
                        <p><?php the_content(); ?></p>
                        </div>  
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





<?php get_footer();
?>