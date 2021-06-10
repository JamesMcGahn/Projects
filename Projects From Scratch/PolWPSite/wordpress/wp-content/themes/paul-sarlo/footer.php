<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Paul_Sarlo
 */

?>

	<footer id="colophon" class="site-footer">
	<script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
      integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
      crossorigin="anonymous"
    ></script>

<div class="row">
	<div class="col-xs-5 col-sm-5 col-md-2 col-2"></div>
		<div class="col-xs-2 col-sm-2 col-md-8 col-lg-8 align-self-center"> 
		  <?php
				wp_nav_menu( array( 
					'theme_location' => 'header_menu',
					'container' => '',
					'items_wrap' => '<ul class="nav justify-content-center">%3$s</ul>',
					'before' => '<span class="nav-link">', 
					'after' => '</span>'
				));
			?>
            <a href="https://twitter.com/PaulASarlo" target="_blank"><i class="fab fa-twitter-square fa-2x navsocial"></i></a>
            <a href="https://www.facebook.com/PaulASarlo" target="_blank"><i class="fab fa-facebook-square fa-2x navsocial"></i></a>
			
			
          
		  </div>  
	<div class="col-sm-12 col-lg-2 align-self-end">
	<div><small> <a href="https://www.senatorpaulsarlo.com">&copy; <?php echo date('Y'); ?> Paul Sarlo </a> </small> </div>
	<div><small> <a href="https://www.jamesmcgahn.com" target="_blank">&copy; <?php echo date('Y'); ?> James McGahn </a> </small> </div>
	</div>

	  </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
