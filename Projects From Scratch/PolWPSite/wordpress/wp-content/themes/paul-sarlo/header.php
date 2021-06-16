<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Paul_Sarlo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
	<?php wp_head(); ?>
	<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"/>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'paul-sarlo' ); ?></a>
	<header>
	<nav class="navbar  sticky-top navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand"  id="navtitle" href="<?php echo esc_url( home_url('/'))?>">Senator Paul Sarlo</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
		  <?php
				wp_nav_menu( array( 
					'theme_location' => 'header_menu',
					'container' => '',
					'items_wrap' => '<div class="navbar-nav col-8 ">%3$s</div>',
					'before' => '<span class="nav-link nav-title">', 
					'after' => '</span>'
				));
			?>
            <?php get_search_form(); ?>
            <a href="https://twitter.com/PaulASarlo" target="_blank"><i class="fab fa-twitter-square fa-2x navsocial"></i></a>
            <a href="https://www.facebook.com/PaulASarlo" target="_blank"><i class="fab fa-facebook-square fa-2x navsocial"></i></a>
        
      
 
          </div>
            
            
            
      </div>
          </div>
          
        </div>
      </nav>
	</header><!-- #masthead -->
