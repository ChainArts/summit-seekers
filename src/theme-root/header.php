<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?> >
    <div id="cursor-hook">
        <!--react--> 
    </div>
    <?php $isFrontPage = is_front_page(); 
        if($isFrontPage){ ?>
        <div id="parallax-header-hook" style="min-height: 140vh, height: 100%">
            <!--react-->
        </div>
    <?php 
    }
        include 'navbar.php';
    ?>
