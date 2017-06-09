#!/usr/bin/env bash

set -e

pushd `dirname $0`/..
trap popd EXIT

protoc -I=$GOPATH/src -I=$GOPATH/src/github.com/gogo/protobuf/protobuf --js_out=import_style=commonjs,binary:src $GOPATH/src/github.com/quorumcontrol/qc/identity/identitypb/identity.proto $GOPATH/src/github.com/quorumcontrol/qc/ownership/ownershippb/ownership.proto

mv src/github.com/**/**/**/**/*_pb.js src/

rm -r src/github.com
