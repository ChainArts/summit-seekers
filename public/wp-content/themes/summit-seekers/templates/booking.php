<main class="booking">
<?php if (have_posts()) {
    while (have_posts()) {
        the_post(); ?>
                <div class="booking-image">
                    <?php the_post_thumbnail(); ?>
                </div>

        
                <div class="booking-content">
                    <h2><?php the_title(); ?></h2>
                    <?php the_content(); ?>
                </div>
        <?php }
} ?>
</main>
