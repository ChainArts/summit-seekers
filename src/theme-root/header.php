<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon-16x16.png">
        <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/favicons/site.webmanifest">
        <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/favicons/safari-pinned-tab.svg" color="#54906d">
        <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon.ico">
        <meta name="msapplication-TileColor" content="#54906d">
        <meta name="msapplication-config" content="<?php echo get_template_directory_uri(); ?>/favicons/browserconfig.xml">
        <meta name="theme-color" content="#54906d">

        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?> >
    <div id="cursor-hook">
        <!--react--> 
    </div>
    <?php $isFrontPage = is_front_page();
    if ($isFrontPage) { ?>
            <div id="parallax-header-hook" style="min-height: 140vh, height: 100%">
                <!--react-->
            </div>
    <?php
    }
    include 'navbar.php';
    ?>
