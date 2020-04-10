# SLP Graph Search gRPC Interface for Node.js Clients


## Install
`npm i grpc-slp-graphsearch-node`


### Build from source (from `./bchrpc.proto`)
1. Install Protocol Compiler from: https://github.com/protocolbuffers/protobuf
2. `npm i`
3. `npm run build && tsc`


## Example usage

```ts
let grpc = new GraphSearchClient();
let txid = "598c6572b70680710560d2ab40cabfde3156353ec5da217e18a8519843ff4423";
let res;
(async () => { res = await grpc.graphSearchFor(txid))();
res.forEach(i => console.log(res.getTxdataList_asU8());
```

## Change Log

### 0.0.1
- Create promise based method for graphSearch(txid);
