#!/bin/sh
# npm run build:custom
# cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/


# pulgin

plugins=("icon-grid" "booking-grid")

cd src/plugins
for plugin in "${plugins[@]}"; do

    cd "./$plugin"
    npm run build:custom
    cp -R ./*.php ../../../public/wp-content/plugins/$plugin/
    cd ..
done