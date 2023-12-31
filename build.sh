#!/bin/sh
npm run build:custom
cp -R ./src/theme-root/* ./public/wp-content/themes/summit-seekers/


# pulgin
cd src/plugins/brad-plugin
npm run build:custom
cp -R ./plugin-root/* ../../../public/wp-content/plugins/brad-plugin


