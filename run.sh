##
# Usage: bash run.sh [tap]
# Ex:
#   > bash run.sh
#   > bash run.sh tap
#   > cd chapter-2 && bash ../run.sh tap

ARGS=""
if [[ $1 == "tap" ]]; then
  ARGS="--reporter tap"
fi

# run all testcases
while read -r file; do
  cd $(dirname $(dirname "$file"))
  mocha $ARGS |\
    grep -Eve '^#|^1\.\.[0-9]{1,}' |\
    grep --color -Ee '^not ok.*|^.*# SKIP.*|^'
  cd - &>/dev/null
done < <(find . -regex '.*/s-[0-9.]*/test/index.js')
