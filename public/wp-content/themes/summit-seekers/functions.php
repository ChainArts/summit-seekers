<?php

function enqueue_styles_and_scripts() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/main.js', array( 'jquery' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'enqueue_styles_and_scripts' );

add_theme_support( 'post-thumbnails' );


// enable SVG support
function cc_mime_types($mimes) { 
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function register_my_menus() {
    register_nav_menus(
      array(
        'main-menu' => __( 'Main Menu' ),
        'footer-menu' => __( 'Footer Menu' )
       )
     );
   }
   add_action( 'init', 'register_my_menus' );
  

?>