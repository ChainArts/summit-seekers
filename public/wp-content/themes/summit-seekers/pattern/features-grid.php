<?php
function get_features_grid()
{
    $args = array(
        'category_name' => 'features',
        'posts_per_page' => 5 // Set the number of posts to display
    );
    $features_query = new WP_Query($args);

    if ($features_query->have_posts()) {
        while ($features_query->have_posts()) {
            $features_query->the_post();
            // Display post content, like the_title() and the_excerpt()
        }
    }
    wp_reset_postdata();
}
?>