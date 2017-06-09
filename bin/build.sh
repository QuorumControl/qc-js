#!/usr/bin/env bash

set -e

pushd `dirname $0`/..
trap popd EXIT

pbjs -p ${GOPATH}/src -t static-module -w commonjs ../qc/identity/identitypb/identity.proto -o src/identity_pb.js
pbjs -p ${GOPATH}/src -t static-module -w commonjs ../qc/ownership/ownershippb/ownership.proto -o src/ownership_pb.js
