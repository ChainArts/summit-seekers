<footer>
    <?php
    function fetch_post($postname)
    {
        $category_id = get_cat_ID($postname);
        $args = array(
            'category' => $category_id,
            'numberposts' => 1
        );
        $posts = get_posts($args);
        return $posts;
    }

    function render_footer_links()
    {
        //Code
    }

    function render_contact()
    {
        $contact = fetch_post("Follow me")[0];

        if(empty($contact)){
            return;
        }

        ?>
        <div class="contact">
            <?php if ($contact): ?>
                    <p class="follow"><?= $contact->post_title ?></p>
                    <div class="follow-content">
                        
                        <?php 
                        
                        echo apply_filters('the_content', $contact->post_content); 
                        ?>
                    </div>
            <?php endif; ?>
        </div>
        <?php
    }



    function render_footer()
    {
        $footer = fetch_post("Footer");

        if(empty($footer)){
            return;
        }

        $content = $footer[0]->post_content;
        $content = str_replace("\n", "", $content);
        $split_content = explode("</ul>", $content);


        ?>
       
        <div class="continents">
            <?php
            if (!empty($split_content)) {
                foreach ($split_content as $part) {
                    echo '<div>' . $part . '</ul></div>';
                }
            }
            ?>
        </div>
        <?php
        render_contact();
    }

    render_footer();
    ?>
</footer>
<?php wp_footer(); ?>
</body>
</html>