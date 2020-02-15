import { GraphSearchClient } from "../src/client";

let grpc = new GraphSearchClient();
let txid = "a05689641f6e91043d56d105bde443d91014fe1e75bb4ecb60a6d8ea868f9628";
let excludeTxids = [
    "abcc193f73c0f6cac975d9d9e3a64b2273135482438e7e84d8ca736d517f9e5b"
];

grpc.graphSearch(txid, excludeTxids)
.then((res: any) => {
	console.log(res.getTxdataList_asU8());
});
