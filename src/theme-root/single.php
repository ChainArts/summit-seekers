<?php get_header();


if (has_category('Adventure Story')) {
    include(get_template_directory() . "/templates/adventure.php");
}
else if(has_category('Expedition')) {
    include(get_template_directory() . "/templates/expedition.php");
}


get_footer(); ?>