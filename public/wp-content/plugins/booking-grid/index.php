<?php

/*
  Plugin Name: Summit Seekers Booking Grid
  Version: 1.0
  Author: Sandra Scheipl
  Description: A plugin that adds a custom block for the SummitSeeker theme.
*/

if (!defined('ABSPATH'))
  exit; // Exit if accessed directly

class SummitSeekersBookingGrid
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    wp_register_script('bookingGridScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('bookingGridStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    register_block_type(
      'makeupnamespace/make-up-block-name',
      array(
        'render_callback' => array($this, 'renderCallback'),
        'editor_script' => 'bookingGridScript',
        'editor_style' => 'bookingGridStyle'
      )
    );
  }

  function renderCallback($attributes)
  {
    if (!is_admin()) {
      wp_enqueue_style('bookingGridFrontendStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start();
    render_booking_grid('Booking');
    return ob_get_clean();
  }
}

function render_booking_grid($postname)
{
  $args = array(
    'category' => get_cat_ID($postname),
    'meta_key' => 'start',
    'orderby' => 'meta_value',
    'order' => 'ASC'
  );
  $posts = get_posts($args);

  if (empty($posts)) {
    return;
  }

  ?><div class="booking-grid contain"><?php

  $index = 0;

  render_booking_grid_item($posts[0]);

  ?><div class="booking-grid-later"><?php

  foreach ($posts as $post) {
    if ($index != 0) {
      render_booking_grid_item($post);
    }
    $index++;
  }
  ?></div><?php

  ?></div><?php
}

function convert_date($date)
{
  $date = DateTime::createFromFormat('Y-m-d', $date);
  return $date ? $date->format('d M') : '';
}


function render_booking_grid_item($post)
{

  $start_date = convert_date(get_post_meta($post->ID, 'start', true));
  $end_date = convert_date(get_post_meta($post->ID, 'end', true));

  ?>
          <div class="booking-grid-item">
            <div class="picture-container">
              <?= get_the_post_thumbnail($post->ID) ?>
            </div>
            <a href=<?= the_permalink($post->ID); ?>>
            <div class="booking-grid-content">
              <div class="date">
                <p><?= $start_date ?></p>
                <p><?= $end_date ?></p>
              </div> 
              <div class="pipe"></div>
              <div class="booking-grid-main"> 
                <p><?= get_post_meta($post->ID, 'location', true); ?></p>
                <h3><?= $post->post_title ?></h3>
              </div>

              <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.55 152.22">
                <defs>
                  <style>
                    .cls-1 {
                      fill: #54906D;
                      stroke-width: 0px;
                    }
                  </style>
                </defs>
                <g id="i64GWl.tif">
                  <polygon class="cls-1" points="8.55 148.79 0 148.79 0 147.91 8.53 147.91 5.67 145.09 6.29 144.49 10.2 148.36 6.25 152.22 5.68 151.68 8.55 148.79"/>
                </g>
              </svg>
            </div>
              </a>
          </div>
      <?php

}
$summitSeekerPlugin = new SummitSeekersBookingGrid();