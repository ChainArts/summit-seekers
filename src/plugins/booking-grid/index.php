<?php

/*
  Plugin Name: Summit Seeker Plugin
  Version: 1.0
  Author: Sandra Scheipl
  Description: A plugin that adds a custom block for the SummitSeeker theme.
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class SummitSeekerPlugin {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('iconGridScript', plugin_dir_url(__FILE__) . 'icon-grid/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('iconGridStyle', plugin_dir_url(__FILE__) . 'icon-grid/index.css');
    
    register_block_type('makeupnamespace/make-up-block-name', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'iconGridScript',
      'editor_style' => 'iconGridStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('iconGridFrontendScript', plugin_dir_url(__FILE__) . 'icon-grid/frontend.js', array('wp-element'));
      wp_enqueue_style('iconGridFrontendStyle', plugin_dir_url(__FILE__) . 'icon-grid/frontend.css');
    }

    ob_start(); ?>
    <div class="icon-grid-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }
  // function renderCallbackBasic($attributes) {
  //   return '<div class="boilerplate-frontend">Hello, the category of my blog post is ' . $attributes['categoryName'] . '.</div>';
  // }
}

$summitSeekerPlugin = new SummitSeekerPlugin();