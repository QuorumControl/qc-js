#!/usr/bin/env bash

set -e

pushd `dirname $0`/..
trap popd EXIT

pbjs -p ${GOPATH}/src -t static-module -w commonjs node_modules/protobufjs/google/protobuf/type.proto ../qc/identity/identitypb/identity.proto ../qc/ownership/ownershippb/ownership.proto ../qc/configs/configspb/configs.proto -o src/qc_pb.js
