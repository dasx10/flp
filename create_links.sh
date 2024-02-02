#!/bin/bash


# CREATE ALIASES
# cd ./Decorators
# cd ./partial
# ln -sf ../partial/p.js ../partial/index.js
# ln -sf ../partial/p.d.ts ../partial/index.d.ts
# cd ..
# cd ..

URL_CURRY=$URL_DECORATORS/$PATH_CURRY/$TMP
URL_PARTIAL=$URL_DECORATORS/$PATH_PARTIAL/$TMP

FP_FILE=f.js
HY_FILE=index.js

NUMBERS_PATHS=("add" "sub" "mul" "div")

for decorator_path in ${DECORATORS_PATHS[@]}; do
  ln -f $URL_CURRY $URL_DECORATORS/$decorator_path/$FP_FILE
done
