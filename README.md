# Simple protobuf example
This repo contains an example application system that demonstrates the use of protobufs. We create a python and node.js server to simulate two seperate services that could use protobufs to send data between them.

# Setup
## Prerequisites
* Python 3.6 or higher
* Node.js 12.16.1 or higher
* [protoc](https://developers.google.com/protocol-buffers/docs/downloads) command line tool

## Installation
Run these scripts to install required components:
```
# install dependencies
npm install
pip install -r requirements.txt

# generate our proto classes
protoc --python_out=src/generated --js_out=import_style=commonjs,binary:src/generated src/protos/customerlist.proto -I src/protos
```



In two separate windows, run the following commands:

#### Window 1
```
yarn start
```

#### Window 2
```
python src/server.py
```

You can now access a web-page on [`http://localhost:3000`](http://localhost:3000)

