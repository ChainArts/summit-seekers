<?php

get_header(); ?>

<main>

<?php if (have_posts()) {
  while (have_posts()) {
    the_post(); ?>
            <div>
              <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <?php the_content(); ?>
            </div>

    

            <!-- example react component -->
            <div id="render-react-example-here"></div>
            <!-- end example react component -->
      <?php }
}

$args = array(
  'order' => 'DESC',
  'category_name' => 'Icon'
);


$adventure_query = new WP_Query($args);
if ($adventure_query->have_posts()):
  while ($adventure_query->have_posts()):
    $adventure_query->the_post(); ?>
      <article>
      <h3>
          <a href="<?php the_permalink(); ?>">
              <?php the_title(); ?>
          </a>
      </h3>
    </article>
  <?php endwhile;
else: ?>
  <p>News coming soon...</p>
<?php endif; 


$args = array(
  'order' => 'DESC',
  'category_name' => 'Adventure Story'
);


$adventure_query = new WP_Query($args);
if ($adventure_query->have_posts()):
  while ($adventure_query->have_posts()):
    $adventure_query->the_post(); ?>
      <article>
      <h3>
          <a href="<?php the_permalink(); ?>">
              <?php the_title(); ?>
          </a>
      </h3>
    </article>
  <?php endwhile;
else: ?>
  <p>News coming soon...</p>
<?php endif; ?>

</main>
<?php
get_footer();