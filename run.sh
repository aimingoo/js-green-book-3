##
# Usage: bash run.sh [tap]
# Ex:
#   > bash run.sh
#   > bash run.sh tap
#   > cd chapter-2 && bash ../run.sh tap

# run all testcases
if [[ $1 == tap ]]; then
  while read -r file; do
    mocha --reporter tap "$file" |\
      grep -Eve '^#|^1\.\.[0-9]{1,}' |\
      grep --color -Ee '^not ok.*|^.*# SKIP.*|^'
  done < <(find . -regex '.*/test/index.js')
else
  find . -regex '.*/test/index.js' | xargs -L1 mocha $*
fi
