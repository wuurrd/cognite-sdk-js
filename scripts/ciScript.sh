#!/usr/bin/bash
# exit when any command fails, print each command
set -ex

if [ "$ONLY_TEST" = true ]; then
    echo "Only doing build and test"
    yarn --frozen-lockfile --ignore-engines
    yarn global add lerna@3.1.4 #Supports node 8
    lerna run build --stream
    lerna run test --stream
else
    yarn --frozen-lockfile
    yarn global add codecov@3.7.0
    yarn commitlint-travis
    yarn validateDocLinks || true
    yarn lint
    yarn build
    yarn test:codecov
    yarn test-samples
    yarn test-snippets
    yarn docs:bundle
fi