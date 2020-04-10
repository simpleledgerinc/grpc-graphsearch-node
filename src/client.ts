import * as fs from "fs";
import * as grpc from "grpc";
import * as graphsearchrpc_grpc_pb from "../pb/graphsearchrpc_grpc_pb";
import * as graphsearchrpc_pb from "../pb/graphsearchrpc_pb";

export class GraphSearchClient {
    public client: graphsearchrpc_grpc_pb.GraphSearchServiceClient;

    constructor({ url, rootCertPath, options }:
        { url?: string; rootCertPath?: string; testnet?: boolean, options?: object } = {}) {
        let creds = grpc.credentials.createInsecure();
        if (rootCertPath) {
            const rootCert = fs.readFileSync(rootCertPath);
            creds = grpc.credentials.createSsl(rootCert);
        }
        if (!url) {
            url = "ec2-3-16-85-248.us-east-2.compute.amazonaws.com:50051";
        }
        if (!options) {
            options = {
                "grpc.max_receive_message_length": -1, // unlimited
            };
        }

        this.client = new graphsearchrpc_grpc_pb.GraphSearchServiceClient(url, creds, options);
    }

    public graphSearchFor({ hash, reversedHashOrder, excludeList }:
        { hash: string, reversedHashOrder: boolean, excludeList: string[] }):
        Promise<graphsearchrpc_pb.GraphSearchReply> {
        const req = new graphsearchrpc_pb.GraphSearchRequest();
        if (reversedHashOrder) {
            req.setTxid(
                Buffer.from(new Uint8Array(
                    hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse()).toString("hex"));
        } else {
            req.setTxid(hash);
        }
        for (const excl of excludeList) {
            if (reversedHashOrder) {
                req.addExcludeTxids(
                    Buffer.from(new Uint8Array(
                        excl.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse()).toString("hex"));
            } else {
                req.addExcludeTxids(excl);
            }
        }
        return new Promise((resolve, reject) => {
            this.client.graphSearch(req, (err, data) => {
                if (err !== null) { reject(err); } else { resolve(data!); }
            });
        });
    }
}
