<?php

/*
  Plugin Name: Summit Seekers Carousel
  Version: 2.0
  Author: Sandra Scheipl
  Description: A plugin that adds a custom block for the SummitSeeker theme.
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class SummitSeekersCarousel {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('carouselScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('carouselStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('summitseekers/carousel-block', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'carouselScript',
      'editor_style' => 'carouselStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('carouselFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('carouselFrontendStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="carousel-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }
}

$summitSeekerPlugin = new SummitSeekersCarousel();