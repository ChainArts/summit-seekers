<?php get_header();


if (has_category('Adventure Story')) {
    include(get_template_directory() . "/templates/adventure.php");
}


get_footer(); ?>