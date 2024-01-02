<?php

/*
  Plugin Name: Summit Seekers Icon Grid
  Version: 1.0
  Author: Sandra Scheipl
  Description: A plugin that adds a custom block for the SummitSeeker theme.
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class SummitSeekersIconGrid {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('iconGridScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('iconGridStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('summitseekers/icon-grid-block', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'iconGridScript',
      'editor_style' => 'iconGridStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('iconGridFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('iconGridFrontendStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="icon-grid-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }
}

$summitSeekerPlugin = new SummitSeekersIconGrid();