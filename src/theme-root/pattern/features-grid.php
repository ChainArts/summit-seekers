<?php


function get_features_grid()
{
    $content = '<div class="feature-grid">';

    $args = array(
        'category_name' => 'features',
        'posts_per_page' => 3
    );
    $features_query = new WP_Query($args);

    if ($features_query->have_posts()) {
        while ($features_query->have_posts()) {
            $features_query->the_post();
            $content .= '<div class="feature">';
            $content .= '<img src="' . get_the_post_thumbnail() . '" alt=" ">';
            $content .= '<h3>' . get_the_title() . '</h3>';
            $content .= '<p>' . get_the_excerpt() . '</p>';
            $content .= '</div>';
        }
    }
    wp_reset_postdata();

    $content .= '</div>';
    return $content;
}


?>