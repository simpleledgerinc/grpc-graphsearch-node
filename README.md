# SLP Graph Search gRPC Interface for Node.js Clients


## Install
`npm i grpc-graphsearch-node`


### Build from source (from `./bchrpc.proto`)
1. Install Protocol Compiler from: https://github.com/protocolbuffers/protobuf
2. `npm i`
3. `npm run build`


## Example usage

```ts
let grpc = new GraphSearchClient({ url: "<url to a gs++ server>", notls: true });
let txid = "598c6572b70680710560d2ab40cabfde3156353ec5da217e18a8519843ff4423";
let res;
(async () => { res = await grpc.graphSearchFor({ hash: txid, reversedHashOrder: true }))();
res.forEach(i => console.log(res.getTxdataList_asU8());
```

## Change Log

### 0.2.0
- Added `notls` option to explicitly connect without ssl.
- Updated gRPC version and build scripts
- Added built pb files to github
- Updated unit tests

### 0.1.3
- Update default URL to gs.fountainhead.cash
- Update default parameters

### 0.1.0
- Updated proto file
- Added 'reveredHashOrder' and 'excludeList' options to graphSearchFor() client method
- Updated package name

### 0.0.1
- Create promise based method for graphSearch(txid);
