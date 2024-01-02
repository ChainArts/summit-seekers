<?php

get_header(); ?>
<div id="nav-hook">
  <!--react-->
</div>

<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
    <div>
      <?php the_content(); ?>
    </div>
  <?php }
}

get_footer();