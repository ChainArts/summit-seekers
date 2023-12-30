<?php get_header(); ?>
<?php include 'parts/nav.php'; ?>
<main>
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post(); // Iterate the post index in the loop.
            the_title(); // Display or retrieve the current post title 
            the_content(); // Display the post content.
        }
    }

    ?>
</main>
<?php get_footer(); ?>