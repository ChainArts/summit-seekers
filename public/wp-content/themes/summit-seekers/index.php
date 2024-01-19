<?php

get_header(); ?>
<div id="parallax-header-hook" style="min-height: 140vh, height: 100%">
    <!--react-->
</div>
<header>
    <nav id="nav-hook">
    <!--react-->
    </nav>
</header>
<main>

<?php if (have_posts()) {
  while (have_posts()) {
    the_post(); ?>
      <?php the_content(); ?>
  <?php }
}

?>

</main>
<?php
get_footer();