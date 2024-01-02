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

