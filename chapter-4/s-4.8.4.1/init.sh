#!/bin/sh

# The script from https://github.com/aimingoo/prepack-core

# Auto check or force
FORCE=false;
if [[ ! -d './prepack-core' ]] ||
   [[ "$1" == "-f" ]]; then
  mkdir prepack-core 2>/dev/null
  FORCE=true;
fi

# build prepack-core
if $FORCE; then
  git clone -b proposal-public-property --recursive --depth 1 https://github.com/aimingoo/prepack-core prepack-tmp
  cd prepack-tmp 2>/dev/null
  npm install
  npm run build-repl && npm run build-bundle
  cd - 2>/dev/null
  mv ./prepack-tmp/prepack.min.js ./prepack-core/
  rm -rf ./prepack-tmp
fi

# make a runner script
cat > ./prepack-core/runner.js <<_SORUCE_CODE
var { default: execute } = require('./prepack.min.js');
var { readFileSync } = require('fs');

// arguments parser
var [,,...[filename, ...args]] = process.argv;

// execute only
execute(readFileSync(filename, 'utf-8'));
_SORUCE_CODE

# done
echo "Done."