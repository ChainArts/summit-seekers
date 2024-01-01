<?php

/*
  Plugin Name: Summit Seekers Booking Grid
  Version: 1.0
  Author: Sandra Scheipl
  Description: A plugin that adds a custom block for the SummitSeeker theme.
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class SummitSeekersBookingGrid {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('bookingGridScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('bookingGridStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('makeupnamespace/make-up-block-name', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'bookingGridScript',
      'editor_style' => 'bookingGridStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('bookingGridFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('bookingGridFrontendStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="booking-grid-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }
}

$summitSeekerPlugin = new SummitSeekersBookingGrid();