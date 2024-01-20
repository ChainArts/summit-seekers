<main class="booking">
<?php

if (have_posts()) {
    while (have_posts()) {
        the_post(); ?>
                <div class="booking-image">
                    <?php the_post_thumbnail(); ?>
                </div>

        
                <div class="booking-container">
                    <div class="booking-content">
                        <h2><?php the_title(); ?></h2>
                        <ul>


                        <?php
                                $startDate = DateTime::createFromFormat('Y-m-d', get_post_meta(get_the_ID(), 'start', true));
                                $endDate = DateTime::createFromFormat('Y-m-d', get_post_meta(get_the_ID(), 'end', true));

                                $formattedStart = 'Invalid date';
                                $formattedEnd = 'Invalid date';

                                if ($startDate !== false && $endDate !== false) {
                                    if ($startDate->format('Y') === $endDate->format('Y')) {
                                        $formattedStart = $startDate->format('d F');
                                        $formattedEnd = $endDate->format('d F Y');
                                    } else {
                                        $formattedStart = $startDate->format('d F Y');
                                        $formattedEnd = $endDate->format('d F Y');
                                    }
                                }
                        ?>

                            <li>Duration: <?= $formattedStart . ' - ' . $formattedEnd?></li>
                            <li>Location: <?= get_post_meta(get_the_ID(), 'location', true); ?></li>
                            <li>Price: <?= get_post_meta(get_the_ID(), 'cost', true); ?></li>
                        </ul>
                        <?php the_content(); ?>
                    </div>

                <div class="pipe"></div>
                <div class="booking-form">
                </div>
                </div>
        <?php }
} ?>
</main>

<?php

