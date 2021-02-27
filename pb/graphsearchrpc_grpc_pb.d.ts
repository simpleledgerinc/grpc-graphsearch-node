// package: graphsearch
// file: pb/graphsearchrpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pb_graphsearchrpc_pb from "../pb/graphsearchrpc_pb";

interface IGraphSearchServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    graphSearch: IGraphSearchServiceService_IGraphSearch;
    trustedValidation: IGraphSearchServiceService_ITrustedValidation;
    trustedValidationBulk: IGraphSearchServiceService_ITrustedValidationBulk;
    outputOracle: IGraphSearchServiceService_IOutputOracle;
    status: IGraphSearchServiceService_IStatus;
}

interface IGraphSearchServiceService_IGraphSearch extends grpc.MethodDefinition<pb_graphsearchrpc_pb.GraphSearchRequest, pb_graphsearchrpc_pb.GraphSearchReply> {
    path: "/graphsearch.GraphSearchService/GraphSearch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_graphsearchrpc_pb.GraphSearchRequest>;
    requestDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.GraphSearchRequest>;
    responseSerialize: grpc.serialize<pb_graphsearchrpc_pb.GraphSearchReply>;
    responseDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.GraphSearchReply>;
}
interface IGraphSearchServiceService_ITrustedValidation extends grpc.MethodDefinition<pb_graphsearchrpc_pb.TrustedValidationRequest, pb_graphsearchrpc_pb.TrustedValidationReply> {
    path: "/graphsearch.GraphSearchService/TrustedValidation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_graphsearchrpc_pb.TrustedValidationRequest>;
    requestDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.TrustedValidationRequest>;
    responseSerialize: grpc.serialize<pb_graphsearchrpc_pb.TrustedValidationReply>;
    responseDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.TrustedValidationReply>;
}
interface IGraphSearchServiceService_ITrustedValidationBulk extends grpc.MethodDefinition<pb_graphsearchrpc_pb.TrustedValidationBulkRequest, pb_graphsearchrpc_pb.TrustedValidationBulkReply> {
    path: "/graphsearch.GraphSearchService/TrustedValidationBulk";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_graphsearchrpc_pb.TrustedValidationBulkRequest>;
    requestDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.TrustedValidationBulkRequest>;
    responseSerialize: grpc.serialize<pb_graphsearchrpc_pb.TrustedValidationBulkReply>;
    responseDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.TrustedValidationBulkReply>;
}
interface IGraphSearchServiceService_IOutputOracle extends grpc.MethodDefinition<pb_graphsearchrpc_pb.OutputOracleRequest, pb_graphsearchrpc_pb.OutputOracleReply> {
    path: "/graphsearch.GraphSearchService/OutputOracle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_graphsearchrpc_pb.OutputOracleRequest>;
    requestDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.OutputOracleRequest>;
    responseSerialize: grpc.serialize<pb_graphsearchrpc_pb.OutputOracleReply>;
    responseDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.OutputOracleReply>;
}
interface IGraphSearchServiceService_IStatus extends grpc.MethodDefinition<pb_graphsearchrpc_pb.StatusRequest, pb_graphsearchrpc_pb.StatusReply> {
    path: "/graphsearch.GraphSearchService/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_graphsearchrpc_pb.StatusRequest>;
    requestDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.StatusRequest>;
    responseSerialize: grpc.serialize<pb_graphsearchrpc_pb.StatusReply>;
    responseDeserialize: grpc.deserialize<pb_graphsearchrpc_pb.StatusReply>;
}

export const GraphSearchServiceService: IGraphSearchServiceService;

export interface IGraphSearchServiceServer {
    graphSearch: grpc.handleUnaryCall<pb_graphsearchrpc_pb.GraphSearchRequest, pb_graphsearchrpc_pb.GraphSearchReply>;
    trustedValidation: grpc.handleUnaryCall<pb_graphsearchrpc_pb.TrustedValidationRequest, pb_graphsearchrpc_pb.TrustedValidationReply>;
    trustedValidationBulk: grpc.handleUnaryCall<pb_graphsearchrpc_pb.TrustedValidationBulkRequest, pb_graphsearchrpc_pb.TrustedValidationBulkReply>;
    outputOracle: grpc.handleUnaryCall<pb_graphsearchrpc_pb.OutputOracleRequest, pb_graphsearchrpc_pb.OutputOracleReply>;
    status: grpc.handleUnaryCall<pb_graphsearchrpc_pb.StatusRequest, pb_graphsearchrpc_pb.StatusReply>;
}

export interface IGraphSearchServiceClient {
    graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    status(request: pb_graphsearchrpc_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
    status(request: pb_graphsearchrpc_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
    status(request: pb_graphsearchrpc_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
}

export class GraphSearchServiceClient extends grpc.Client implements IGraphSearchServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    public graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    public graphSearch(request: pb_graphsearchrpc_pb.GraphSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.GraphSearchReply) => void): grpc.ClientUnaryCall;
    public trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    public trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    public trustedValidation(request: pb_graphsearchrpc_pb.TrustedValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationReply) => void): grpc.ClientUnaryCall;
    public trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    public trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    public trustedValidationBulk(request: pb_graphsearchrpc_pb.TrustedValidationBulkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.TrustedValidationBulkReply) => void): grpc.ClientUnaryCall;
    public outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    public outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    public outputOracle(request: pb_graphsearchrpc_pb.OutputOracleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.OutputOracleReply) => void): grpc.ClientUnaryCall;
    public status(request: pb_graphsearchrpc_pb.StatusRequest, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
    public status(request: pb_graphsearchrpc_pb.StatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
    public status(request: pb_graphsearchrpc_pb.StatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_graphsearchrpc_pb.StatusReply) => void): grpc.ClientUnaryCall;
}
