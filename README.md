# SLP Graph Search gRPC Interface for Node.js Clients

Perform client side validation of SLP transactions using [gs++](https://gs.fountainhead.cash/) easily in Node.js with this package.


## Install

`npm install grpc-slp-graphsearch-node --save-dev`


### Build from source

1. Install Protocol Compiler from: https://github.com/protocolbuffers/protobuf
2. `npm install`
3. `npm run build && tsc`


## Example usage

Multiple examples are in the `./example` directory

```
tsc example/graphSearch.ts && node example/graphSearch.js
tsc example/graphSearchExcludeTxids.ts && node example/graphSearchExcludeTxids.js
tsc example/trustedValidation.ts && node example/trustedValidation.js
tsc example/status.ts && node example/status.js
```

## Change Log

### 1.0.0

- Rename graphSearchFor to graphSearch
- Add optional excludeTxids parameter to graphSearch
- Add trustedValidation route
- Add status route
- Add examples


### 0.0.1
- Create promise based method for graphSearch(txid);
