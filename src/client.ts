import * as fs from "fs";
import * as grpc from "grpc";
import * as graphsearchrpc_grpc_pb from "../pb/graphsearchrpc_grpc_pb";
import * as graphsearchrpc_pb from "../pb/graphsearchrpc_pb";

interface IGraphSearchParameters {
    hash: string;
    reversedHashOrder?: boolean;
    excludeList?: string[];
}

interface ITrustedValidationParameters {
    hash: string;
    reversedHashOrder?: boolean;
}

export class GraphSearchClient {
    public client: graphsearchrpc_grpc_pb.GraphSearchServiceClient;

    constructor({ url, rootCertPath, options, notls }: { url?: string; rootCertPath?: string; testnet?: boolean, options?: object, notls?: boolean } = {}) {
        let creds = grpc.credentials.createSsl();
        if (rootCertPath) {
            const rootCert = fs.readFileSync(rootCertPath);
            creds = grpc.credentials.createSsl(rootCert);
        } else if (notls) {
            creds = grpc.credentials.createInsecure();
        }
        if (!url) {
            url = "gs.fountainhead.cash:50051";
        }
        if (!options) {
            options = {
                "grpc.max_receive_message_length": -1, // unlimited
            };
        }

        this.client = new graphsearchrpc_grpc_pb.GraphSearchServiceClient(url, creds, options);
    }

    public graphSearchFor({ hash, reversedHashOrder = true, excludeList = [] }: IGraphSearchParameters): Promise<graphsearchrpc_pb.GraphSearchReply> {
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

    public trustedValidationFor({ hash, reversedHashOrder = true }: ITrustedValidationParameters): Promise<graphsearchrpc_pb.TrustedValidationReply> {
        const req = new graphsearchrpc_pb.TrustedValidationRequest();
        if (reversedHashOrder) {
            req.setTxid(Buffer.from(new Uint8Array(
                hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse()).toString("hex"));
        } else {
            req.setTxid(hash);
        }
        return new Promise((resolve, reject) => {
            this.client.trustedValidation(req, (err, data) => {
                if (err !== null) { reject(err); } else { resolve(data!); }
            });
        });
    }

    public getStatus(): Promise<graphsearchrpc_pb.StatusReply> {
        return new Promise((resolve, reject) => {
            this.client.status(new graphsearchrpc_pb.StatusRequest(), (err, data) => {
                if (err !== null) { reject(err); } else { resolve(data!); }
            });
        });
    }
}
