<?php
/*
    Template Name: Contact
 */
$thumbnailUrl = wp_get_attachment_url(get_post_thumbnail_id($post -> ID));


get_header();
?>
<?php if (has_post_thumbnail()  ) { ?>
 <!-- FEATURE IMAGE
    ================================================== -->
    <section class="feature-image" style="background:url('<?php echo $thumbnailUrl; ?>') no-repeat; background-size: cover;" data-type="background" data-speed="2">
      <h1>Contact</h1>
    </section>

<?php } else { ?>
    <section class="feature-image feature-image-default" data-type="background" data-speed="2">
      <h1>Contact</h1>
    </section>

    <?php } ?>

<div class="container">
      <div class="row" id="primary">
        <div id="content" class="col-sm-12">
          <section class="main-content">
                <?php while (have_posts()) : the_post(); ?>
                    <?php the_content(); ?>
                <?php endwhile;?>
          </section>
        </div>
        <!-- content -->
      </div>
      <!-- primary -->
    </div>
    <!-- container -->

<?php
get_footer();