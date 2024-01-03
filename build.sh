#!/bin/zsh
 npm run build:custom
 cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/
 cp -R ./src/assets ./public/wp-content/themes/summit-seekers/assets

plugins=("carousel")

cd src/plugins
for plugin in "${plugins[@]}"; do

    cd "./$plugin"
    npm run build:custom
    cp -R ./*.php ../../../public/wp-content/plugins/$plugin/
    cd ..
done