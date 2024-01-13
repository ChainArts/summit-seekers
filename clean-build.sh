#!/bin/zsh
# rm -rf ./public/wp-content/themes/summit-seekers/

plugins=("carousel")

for plugin in "${plugins[@]}"; do
    rm -rf ./public/wp-content/plugins/$plugin/
done

./build.sh
