#!/usr/bin/env bash 

# a local modules repo
mkdir ./node_modules 2>/dev/null

# all packages
npm install @std/esm chai fancy-test
npm install ./lib/chapter
npm install -g mocha

# done
echo "Done."
