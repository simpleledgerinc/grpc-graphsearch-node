import { GraphSearchClient } from "../src/client";

let grpc = new GraphSearchClient();
grpc.status()
.then((res: any) => {
	console.log(res.getBlockHeight());
	console.log(res.getBestBlockHash());
	console.log(res.getLastIncomingZmqTxUnix());
	console.log(res.getLastOutgoingZmqTxUnix());
	console.log(res.getLastIncomingZmqTx());
	console.log(res.getLastOutgoingZmqTx());
	console.log(res.getLastIncomingZmqBlkUnix());
	console.log(res.getLastOutgoingZmqBlkUnix());
	console.log(res.getLastIncomingZmqBlkSize());
	console.log(res.getLastOutgoingZmqBlkSize());
});
