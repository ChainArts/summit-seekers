#!/bin/sh
#npx sass ./src/sass/style.scss ./public/wp-content/themes/summit-seekers/style.css
npm run build:custom
cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/

