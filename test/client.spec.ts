import { assert } from "chai";
import { GraphSearchClient } from "../src/index";

describe("GrpcGraphSearchClient", () => {
    it("gets gs++ status", async () => {
        const client = new GraphSearchClient({url: "gs.ny1.simpleledger.io:50051", notls: true });
        const res = await client.getStatus();
        const block = res.getBlockHeight();
        assert.isNumber(block);
        assert.ok(block > 0);
    });

    it("gets txns", async () => {
        const client = new GraphSearchClient({url: "gs.ny1.simpleledger.io:50051", notls: true});
        const hash = "05ea5cb69fb18055371efe4a17e35b0f2cec3ac375c90a1f269d56522f658287";
        const res = await client.graphSearchFor({hash, reversedHashOrder: true});
        const txns = res.getTxdataList_asU8();
        assert.strictEqual(txns.length, 2399);
    });
});
