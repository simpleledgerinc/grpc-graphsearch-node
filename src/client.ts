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
            url = "ec2-3-16-85-248.us-east-2.compute.amazonaws.com:50051";
        }
        if(!options) {
            options = {
                'grpc.max_receive_message_length': -1, // unlimited
            }
        }

        this.client = new graphsearchrpc_grpc_pb.GraphSearchServiceClient(url, creds, options)
    }

    graphSearchFor(txid: string): Promise<graphsearchrpc_pb.GraphSearchReply> {
        let req = new graphsearchrpc_pb.GraphSearchRequest();
        req.setTxid(txid);
        return new Promise((resolve, reject) => {
            this.client.graphSearch(req, (err, data) => {
                if (err !== null) reject(err);
                else resolve(data!);
            });
        });
    }
}
