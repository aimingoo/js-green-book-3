#!/bin/sh

# check exists
if [[ -d './lib/@babel/parser' ]]; then
  if [[ "$1" != "-f" ]]; then
    exit 0
  fi
fi

# check source
if [[ ! -d '../s-6.8.2/prepack-core/node_modules/@babel/parser' ]]; then
  echo "Need initialization prepack environment first"
  exit 1
fi

# init
mkdir ./lib 2>/dev/null
mkdir ./lib/@babel 2>/dev/null
cp -rf ../s-6.8.2/prepack-core/node_modules/@babel/parser ./lib/@babel/