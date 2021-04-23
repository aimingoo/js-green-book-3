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
  git clone --recursive --depth 1 https://github.com/aimingoo/prepack-core
  cd prepack-core 2>/dev/null
  npm install
  npm run build-repl && npm run build-bundle
  cd - 2>/dev/null
fi

# make a runner script
cat > ./prepack-core/hello.js <<_SORUCE_CODE
// 加载prepack-core包
execute = require('./lib').default

// 执行
execute(\`console.log("Hello World!")\`); // Hello World!
_SORUCE_CODE

cat > ./run.sh <<_RUN_TEST
node prepack-core/hello.js
_RUN_TEST

# done
echo "The prepack environment initialized."