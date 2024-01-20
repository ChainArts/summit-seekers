<?php

function load_styles_and_react_scripts() {
  wp_enqueue_script('mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), 1.1, true);
  wp_enqueue_style('style', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'load_styles_and_react_scripts');

function add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'add_support');

add_theme_support('post-thumbnails');


// enable SVG support
function cc_mime_types($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function register_my_menus()
{
  register_nav_menus(
    array(
      'main-menu' => __('Main Menu'),
      'footer-menu' => __('Footer Menu')
    )
  );
}
add_action('init', 'register_my_menus');

# Custom API endpoint for menus

function custom_main_menu()  {
   return wp_get_nav_menu_items('main');
}

function custom_footer_menu()  {
   return wp_get_nav_menu_items('footer');
}

add_action('rest_api_init', function () {
  register_rest_route('wp/v2', 'custom-menus/main', array(
    'methods' => 'GET',
    'callback' => 'custom_main_menu',
  ));
  register_rest_route('wp/v2', 'custom-menus/footer', array(
    'methods' => 'GET',
    'callback' => 'custom_footer_menu',
  ));
});

add_filter( 'big_image_size_threshold', '__return_false' );
