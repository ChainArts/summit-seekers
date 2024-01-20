<?php get_header();

if(has_category('Booking')) {
    include(get_template_directory() . "/templates/booking.php");
} else {
    include(get_template_directory() . "/templates/adventure.php");
}

get_footer(); ?>