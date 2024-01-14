<?php get_header();?>

<nav id="nav-hook">
  <!--react-->
</nav>

<?php

if(has_category('Expedition')) {
    include(get_template_directory() . "/templates/expedition.php");
} else {
    include(get_template_directory() . "/templates/adventure.php");
}

get_footer(); ?>