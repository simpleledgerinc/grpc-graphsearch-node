import { GraphSearchClient } from "../src/client";

let grpc = new GraphSearchClient();
let txid = "a05689641f6e91043d56d105bde443d91014fe1e75bb4ecb60a6d8ea868f9628";
grpc.trustedValidation(txid)
.then((res: any) => {
	console.log(res.getValid());
});
