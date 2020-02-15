import * as fs from 'fs';
import * as grpc from 'grpc';
import * as graphsearchrpc_pb from '../pb/graphsearchrpc_pb';
import * as graphsearchrpc_grpc_pb from '../pb/graphsearchrpc_grpc_pb';

export class GraphSearchClient {
    client: graphsearchrpc_grpc_pb.GraphSearchServiceClient;

    constructor({ url, rootCertPath, options }: { url?: string; rootCertPath?: string; testnet?: boolean, options?: object } = {}) {
        let creds = grpc.credentials.createInsecure();
        if(rootCertPath) {
            const rootCert = fs.readFileSync(rootCertPath);
            creds = grpc.credentials.createSsl(rootCert)
        }
        if(!url) {
            url = "gs.fountainhead.cash:50051";
        }
        if(!options) {
            options = {
                'grpc.max_receive_message_length': -1, // unlimited
            }
        }

        this.client = new graphsearchrpc_grpc_pb.GraphSearchServiceClient(url, creds, options)
    }

    graphSearch(txid: string, excludeTxids?: string[]): Promise<graphsearchrpc_pb.GraphSearchReply> {
        let req = new graphsearchrpc_pb.GraphSearchRequest();
        req.setTxid(txid);
        if (excludeTxids) {
            for (const etxid of excludeTxids) {
                req.addExcludeTxids(etxid);
            }
        }
        return new Promise((resolve, reject) => {
            this.client.graphSearch(req, (err, data) => {
                if (err !== null) reject(err);
                else resolve(data!);
            });
        });
    }

    trustedValidation(txid: string): Promise<graphsearchrpc_pb.TrustedValidationReply> {
        let req = new graphsearchrpc_pb.TrustedValidationRequest();
        req.setTxid(txid);
        return new Promise((resolve, reject) => {
            this.client.trustedValidation(req, (err, data) => {
                if (err !== null) reject(err);
                else resolve(data!);
            });
        });
    }

    status(): Promise<graphsearchrpc_pb.StatusReply> {
        let req = new graphsearchrpc_pb.StatusRequest();
        return new Promise((resolve, reject) => {
            this.client.status(req, (err, data) => {
                if (err !== null) reject(err);
                else resolve(data!);
            });
        });
    }
}
