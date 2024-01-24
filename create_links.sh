#!/bin/bash


# CREATE FILES
# [ -f "./dev/curl_list" ] && echo 2
URL_DECORATORS=./Decorators
TMP="template.js"
PATH_CURRY=curry2
PATH_PARTIAL=partial

# CREATE ALIASES
cd ./Decorators
cd ./partial
ln -sf ../partial/p.js ../partial/index.js
ln -sf ../partial/p.d.ts ../partial/index.d.ts
cd ..
cd ..

URL_CURRY=$URL_DECORATORS/$PATH_CURRY/$TMP
URL_PARTIAL=$URL_DECORATORS/$PATH_PARTIAL/$TMP

FP_FILE=f.js
HY_FILE=index.js

NUMBERS_PATHS=("add" "sub" "mul" "div")
DECORATORS_PATHS=("ap" "on" "arity" "partialLimit")

for decorator_path in ${DECORATORS_PATHS[@]}; do
  ln -f $URL_CURRY $URL_DECORATORS/$decorator_path/$FP_FILE
  ln -f $URL_PARTIAL $URL_DECORATORS/$decorator_path/$HY_FILE
done

for number_path in ${NUMBERS_PATHS[@]}; do
  ln -f $URL_CURRY ./Number/$number_path/$FP_FILE
  ln -f $URL_PARTIAL ./Number/$number_path/$HY_FILE
done
