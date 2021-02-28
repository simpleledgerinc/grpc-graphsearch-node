import { assert } from "chai";
import { GraphSearchClient } from "../src/index";

const opts = {
    // for local testing enable
    // url: "127.0.0.1:50051",
    // notls: true
};

describe("GrpcGraphSearchClient", () => {
    it("gets gs++ status", async () => {
        const client = new GraphSearchClient(opts);
        const res = await client.getStatus();
        const block = res.getBlockHeight();
        assert.isNumber(block);
        assert.ok(block > 0);
    });

    it("gets gs++ trustedvalidation", async () => {
        const client = new GraphSearchClient(opts);
        const res = await client.trustedValidationFor({
            hash: '643dd6919ac40dc7480369a5389bfde0a8b786c6d1804bc575b3ec87f252c112',
            reversedHashOrder: true
        });
        const valid = res.getValid();
        assert.isBoolean(valid);
        assert.ok(valid === true);
    });

    it("gets gs++ trustedvalidationbulk", async () => {
        const client = new GraphSearchClient(opts);
        const res = await client.trustedValidationBulkFor({
            hashes: [
                '643dd6919ac40dc7480369a5389bfde0a8b786c6d1804bc575b3ec87f252c112',
                'ee8a606dd3bb75829e3413662630103de82f8a78fb6f411452bc070356ad560d',
            ],
            reversedHashOrder: true
        });
        const validList = res.getValidList();
        assert.strictEqual(validList.length, 2);
        for (let v of validList) {
            const valid = v.getValid();
            assert.isBoolean(valid);
            assert.ok(valid === true);
        }
    });

    it("gets txns", async () => {
        const client = new GraphSearchClient(opts);
        const hash = "05ea5cb69fb18055371efe4a17e35b0f2cec3ac375c90a1f269d56522f658287";
        const res = await client.graphSearchFor({hash, reversedHashOrder: true});
        const txns = res.getTxdataList_asU8();
        assert.strictEqual(txns.length, 2399);
    });
});
