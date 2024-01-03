<main class="adventure">
<?php if (have_posts()) {
    while (have_posts()) {
        the_post(); ?>
        <div class="adventure-image">
            <?php the_post_thumbnail(); ?>
        </div>

        
        <div class="adventure-content">
            <p class="meta"><?= get_post_meta(get_the_ID(), 'footnotes', true); ?></p>
            <h2><?php the_title(); ?></h2>
            <?php the_content(); ?>
        </div>
    <?php }
} ?>
</main>
