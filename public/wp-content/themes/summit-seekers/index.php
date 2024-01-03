<?php

get_header(); ?>
  <header id="header-hook">
    <!--react-->
</header>

<nav id="nav-hook">
  <!--react-->
</nav>
<main>

<?php if (have_posts()) {
  while (have_posts()) {
    the_post(); ?>
    <div>
      <?php the_content(); ?>
    </div>
  <?php }
}

?>

</main>
<?php
get_footer();