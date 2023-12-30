#!/bin/sh
npx sass ./src/sass/style.scss ./public/wp-content/themes/summit-seekers/style.css
cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/
cp -R ./src/fonts ./public/wp-content/themes/summit-seekers/fonts
cp -R ./src/fonts ./public/wp-content/themes/summit-seekers/fonts

