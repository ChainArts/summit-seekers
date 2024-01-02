#!/bin/sh
#rm -rf ./public/wp-content/themes/summit-seekers/

plugins=("booking-grid")

for plugin in "${plugins[@]}"; do
    rm -rf ./public/wp-content/plugins/$plugin/
done

./build.sh
