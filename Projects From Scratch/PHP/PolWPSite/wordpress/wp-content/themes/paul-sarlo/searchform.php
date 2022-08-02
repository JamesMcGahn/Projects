<form role="search"  $aria_label  method="get" class="search-form d-flex" action=" <?php echo esc_url( home_url( '/' ) )  ?>">
				<label>
					
					<input type="search" class="search-field form-control me-2" placeholder="Search" value="<?php get_search_query() ?>" name="s" />
				</label>
                <button class="btn search-submit " type="submit">Search</button>
</form>