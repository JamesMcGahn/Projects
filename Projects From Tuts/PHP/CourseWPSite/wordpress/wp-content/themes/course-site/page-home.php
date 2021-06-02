<?php
/*
    Template Name: Home
 */

// Custom fields
$prelaunch_price = get_post_meta(2, 'prelaunch_price', true);
$launch_price = get_post_meta(2, 'launch_price', true);
$final_price = get_post_meta(2, 'final_price', true);
$course_url = get_post_meta(2, 'course_url', true);
$button_text = get_post_meta(2, 'button_text', true);

// $income_feature_image = get_field('income_feature_image');


get_header();
?>

<section id="hero" data-type="background" data-speed="5">
      <article>
        <div class="container clearfix">
          <div class="row">
            <div class="col-sm-5">
              <img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/logo-badge.png" alt="logo" />
            </div>
            <div class="col-sm-7 hero-text">
              <h1><?php bloginfo( 'name'); ?></h1>
              <p><?php bloginfo( 'description');?> </p>

              <div id="price-timeline">
                <div class="price active">
                  <h4>Pre-Launch Price <small>Ends Soon!</small></h4>
                  <span><?php echo $prelaunch_price; ?></span>
                </div>
                <div class="price">
                  <h4>Launch Price <small>Coming Soon!</small></h4>
                  <span><?php echo $launch_price; ?></span>
                </div>
                <div class="price">
                  <h4>Final Price <small>Coming Soon!</small></h4>
                  <span><?php echo $final_price; ?></span>
                </div>
              </div>
              <p><a class="btn btn-lg btn-danger" href="<?php echo $course_url; ?>" role="button"><?php echo $button_text; ?> &raquo;</a></p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section id="optin">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <p class="lead"><strong>Subscribe to our mailing list.</strong> We'll send something special as a thank you.</p>
          </div>

          <div class="col-sm-4">
            <button class="btn btn-success btn-lg btn-block" data-toggle="modal" data-target="#myModal">Click here to subscribe</button>
          </div>
        </div>
      </div>
    </section>
 <!-- BOOST YOUR INCOME
	================================================== -->
	<section id="boost-income">
		<div class="container">
			
			<div class="section-header">
				<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-boost.png" alt="Chart">
				<h2>How You Can Boost Your Income</h2>
			</div><!-- section-header -->
			
			<p class="lead">Whether you&rsquo;re a freelance designer, entrepreneur, employee for a company, code hobbyist, or looking for a new career &mdash; this course gives you an immensely valuable skill that will enable you to either:</p>
			<div class="row">
				<div class="col-sm-6">
					<h3>Make money on the side</h3>
					<p>So you can save up for that Hawaiian vacation you&rsquo;ve been wanting, help pay off your debt, your car, your mortgage, or simply just to have bonus cash laying around.</p>
				</div><!-- end col -->
				
				<div class="col-sm-6">
					<h3>Create a full-time income</h3>
					<p>WordPress developers have options. Many developers make a generous living off of creating custom WordPress themes and selling them on websites like ThemeForest. Freelance designers and developers can also take on WordPress projects and make an extra $1,000 - $5,000+ per month.</p>
				</div><!-- end col -->
			</div><!-- row -->
		
		</div><!-- container -->
	</section><!-- boost-income -->
	
	
	<!-- WHO BENEFITS
	================================================== -->
	<section id="who-benefits">
		<div class="container">
			
			<div class="section-header">
				<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-pad.png" alt="Pad and pencil">
				<h2>Who Should Take This Course?</h2>
			</div><!-- section-header -->
			
			<div class="row">
				<div class="col-sm-8 col-sm-offset-2">
				
					<h3>Graphic &amp; Web Designers</h3>
					<p>Graphic designers are extremely talented, but ask them to code their designs and they'll freeze up! This leaves them with no other choice but to hire a web developer. Any professional graphic designers knows web developers can be expensive.</p>
					<p>If you&rsquo;re a designer, learning to code your own WordPress websites can change your business entirely! Now, not only are you a great designer, but you're a skillful developer, too! This puts you in a position to <strong>make an extra $1,000 - $5,000 per project.</strong></p>

					<h3>Entrepreneurs</h3>
					<p>Entrepreneurs have big dreams, and in many cases, shoestring budgets. In order to survive in the cut-throat world of the Startup company, it&rsquo;s a necessity to have a world-class website.  However, world-class websites come with a large price tag.</p>
					<p>If you can learn how to build a high-quality startup website by yourself, then you&rsquo;ve just saved yourself a lot of cash, <strong>tens of thousands of dollars in many cases.</strong></p>

					<h3>Employees</h3>
					<p>Any company knows the education &amp; training of their employees is key to a thriving team.</p>
					<p>Depending on the type of company you work for, if you understand how to code, and can develop CMS driven websites, that gives you <strong>negotiating power for a better position, or a higher salary.</strong></p>

					<h3>Code Hobbyists</h3>
					<p>It&rsquo;s fun to learn challenging new skills. Code hobbyists can add dynamic websites to their arsenal of tools to play with &mdash; you can even <strong>sell WordPress themes and plugins for cash!</strong> The possibilities are truly endless.</p>

					<h3>People Looking for a New Career</h3>
					<p>Are you out of work? Looking for a more rewarding job? Desire a career that can allow you to work almost anywhere in the world? Becoming a Web Developer might be the answer for you.</p>
					<p><strong>Web developers are paid well, anywhere from $33,000 to more than $105,000 per year.</strong> They get to work at amazing companies that are changing the world, or they enjoy the ability to start their own companies, become location-independent and work from home, from coffee shops, in an airplane, on the beach, or wherever they want!</p>
					
				</div><!-- end col -->
			</div><!-- row -->

		</div><!-- container -->
	</section><!-- who-benefits -->
    

	<!-- COURSE FEATURES
	================================================== -->
	<section id="course-features">
		<div class="container">
		
			<div class="section-header">
				<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-rocket.png" alt="Rocket">
				<h2>Course Features</h2>
			</div><!-- section-header -->
			
			<div class="row">
    
                <?php $loop = new WP_Query( array( 
                    'post_type' => 'course_feature', 'orderby' => 'post_id', 'order' => 'ASC'
                )) ; ?>

                <?php while( $loop ->have_posts() ) : $loop->the_post(); ?>
				<div class="col-sm-2">
					<i class="<?php the_field('course_feature_icon'); ?>"></i>
					<h4><?php the_title(); ?></h4>
				</div><!-- end col -->
                <?php endwhile; ?>


			</div><!-- row -->
		</div><!-- container -->
	</section><!-- course-features -->
	
	
	<!-- PROJECT FEATURES
	================================================== -->
	<section id="project-features">
		<div class="container">
		
			<h2>Final Project Features</h2>
			<p class="lead">hic illum praesentium temporibus libero delectus suscipit minima dolorem. Dolorum veniam quidem illo?</p>
			
			<div class="row">
				<div class="col-sm-4">
					<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-design.png" alt="Design">
					<h3> Modern Design</h3>
					<p>hic illum praesentium temporibus libero delectus suscipit minima dolorem. Dolorum veniam quidem illo?</p>
				</div><!-- col -->
				<div class="col-sm-4">
					<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-code.png" alt="Code">
					<h3>Quality HTML5 &amp; CSS3</h3>
					<p>hic illum praesentium temporibus libero delectus suscipit minima dolorem. Dolorum veniam quidem illo?</p>
				</div><!-- col -->
				<div class="col-sm-4">
					<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/icon-cms.png" alt="CMS">
					<h3>Easy-to-use CMS</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto, earum explicabo illo consequuntur blanditiis reprehenderit velit, </p>
				</div><!-- col -->
				
			</div><!-- row -->
			
		</div><!-- container -->
	</section><!-- project-features -->
	
	
	<!-- VIDEO FEATURETTE
	================================================== -->
	<section id="featurette">
		<div class="container">
			<div class="row">
				<div class="col-sm-8 col-sm-offset-2">
					<h2>Watch the Course Introduction</h2>
					<iframe width="100%" height="415" src="//www.youtube.com/embed/ZJVRyW5k79U" frameborder="0" allowfullscreen></iframe>
				</div><!-- end col -->
			</div><!-- row -->			
		</div><!-- container -->
	</section><!-- featurette -->
	
	
	<!-- INSTRUCTOR
	================================================== -->
	<section id="instructor">
		<div class="container">
			<div class="row">
				<div class="col-sm-8 col-md-6">
					<div class="row">
						<div class="col-lg-8">
							<h2>Your Instructor <small>Johnny Bravo</small></h2>
						</div><!-- end col -->
						<div class="col-lg-4">
							<a href="#" class="badge social twitter" target="_blank"><i class="fa fa-twitter"></i></a>
							<a href="#" class="badge social facebook" target="_blank"><i class="fa fa-facebook"></i></a>
							<a href="#" class="badge social gplus" target="_blank"><i class="fa fa-google-plus"></i></a>
						</div><!-- end col -->
					
					</div><!-- row -->
					
					<p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur rerum repudiandae, temporibus expedita esse architecto dolorem alias illum facere, dolor iure, soluta quis? Ullam vitae fugit voluptas sed expedita aliquam..<p>
					
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et error ut quis, perferendis, illo in similique exercitationem nesciunt iste, tempore libero asperiores magnam amet corporis autem animi saepe quod?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et error ut quis, perferendis, illo in similique exercitationem nesciunt iste, tempore libero asperiores magnam amet corporis autem animi saepe quod?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et error ut quis, perferendis, illo in similique exercitationem nesciunt iste, tempore libero asperiores magnam amet corporis autem animi saepe quod?</p>
					
					<hr>
					
					<h3>The Numbers <small>They Don't Lie</small></h3>
					<div class="row">
						<div class="col-xs-4">
							<div class="num">
								<div class="num-content">
									41,000+ <span>students</span>
								</div><!-- num-content -->
							</div><!-- num -->
						</div><!-- end col -->
						
						<div class="col-xs-4">
							<div class="num">
								<div class="num-content">
									568 <span>reviews</span>
								</div><!-- num-content -->
							</div><!-- num -->
						</div><!-- end col -->
						
						<div class="col-xs-4">
							<div class="num">
								<div class="num-content">
									8 <span>courses</span>
								</div><!-- num-content -->
							</div><!-- num -->
						</div><!-- end col -->
					</div><!-- row -->
					
				</div><!-- end col -->
			</div><!-- row -->
		</div><!-- container -->
	</section><!-- instructor -->
	
	
	<!-- TESTIMONIALS
	================================================== -->
	<section id="kudos">
		<div class="container">
			<div class="row">
			
				<div class="col-sm-8 col-sm-offset-2">
					<h2>What People Are Saying About Johnny</h2>
					
					<!-- TESTIMONIAL -->
					<div class="row testimonial">
						<div class="col-sm-4">
							<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/brennan.jpg" alt="Brennan">
						</div><!-- end col -->
						<div class="col-sm-8">
							<blockquote>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur, necessitatibus rem voluptas esse architecto ex aliquam neque doloremque suscipit ullam recusandae delectus itaque! Deleniti amet officiis dolores mollitia officia?								


								<cite>&mdash; Brennan, graduate</cite>
							</blockquote>
						</div><!-- end col -->
					</div><!-- row -->
					
					<!-- TESTIMONIAL -->
					<div class="row testimonial">
						<div class="col-sm-4">
							<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/ben.png" alt="Illustration of a man with a moustache">
						</div><!-- end col -->
						<div class="col-sm-8">
							<blockquote>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur, necessitatibus rem voluptas esse architecto ex aliquam neque doloremque suscipit ullam recusandae delectus itaque! Deleniti amet officiis dolores mollitia officia?

								<cite>&mdash; Ben, graduate</cite>
							</blockquote>
						</div><!-- end col -->
					</div><!-- row -->
					
					<!-- TESTIMONIAL -->
					<div class="row testimonial">
						<div class="col-sm-4">
							<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/aj.png" alt="Illustration of a man with a beard">
						</div><!-- end col -->
						<div class="col-sm-8">
							<blockquote>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur, necessitatibus rem voluptas esse architecto ex aliquam neque doloremque suscipit ullam recusandae delectus itaque! Deleniti amet officiis dolores mollitia officia?

								<cite>&mdash; AJ, graduate</cite>
							</blockquote>
						</div><!-- end col -->
					</div><!-- row -->
	
					<!-- TESTIMONIAL -->
					<div class="row testimonial">
						<div class="col-sm-4">
							<img src="<?php bloginfo( 'stylesheet_directory'); ?>/assets/img/ernest.png" alt="Illustration of a man with a goatee">
						</div><!-- end col -->
						<div class="col-sm-8">
							<blockquote>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur, necessitatibus rem voluptas esse architecto ex aliquam neque doloremque suscipit ullam recusandae delectus itaque! Deleniti amet officiis dolores mollitia officia?								<cite>&mdash; Tyco, graduate </cite>
							</blockquote>
						</div><!-- end col -->
					</div><!-- row -->
					
				</div><!-- end col -->
				
			</div><!-- row -->
		</div><!-- container -->
	</section><!-- kudos -->


<?php
get_footer();
