<?php
/*
    Template Name: About Paul
 */

get_header();
?>
    <div id="home" class="container-fluid">
    <div class="row headerImage align-items-center">
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
                            <div class="col-md-3 col-sm-12 bioimage"><img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post-> ID)); ?>"></div>
                            <div class="col-md-9 col-sm-12 bio">
                            <?php the_content(); ?>
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