<header>
    <nav id="site-navigation">
        <?php
        $is_home_page = is_front_page();
        $home_link = esc_url(home_url('/'));

        echo '<ul><li><a href="' . ($is_home_page ? '#' : $home_link) . '"' . ($is_home_page ? ' onclick="event.preventDefault(); window.scrollTo({ top: 0, behavior: \'smooth\' });"' : '') . '>Summit Seekers</a></li>';

        $menu_args = array(
            'theme_location' => 'main-menu', 
            'container'      => false,
            'items_wrap'     => '%3$s</ul>',
        );

        wp_nav_menu($menu_args);
        ?>
    </nav>
</header>