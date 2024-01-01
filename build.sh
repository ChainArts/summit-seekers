#!/bin/sh
# npm run build:custom
# cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/


# pulgin
cd src/plugins/booking-grid
npm run build:custom
cp -R ./*.php ../../../public/wp-content/plugins/booking-grid/


