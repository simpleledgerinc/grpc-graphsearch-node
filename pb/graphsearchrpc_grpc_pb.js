// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// source: https://github.com/blockparty-sh/cpp_slp_graph_search/blob/master/pb/graphsearch.proto
'use strict';
var grpc = require('grpc');
var pb_graphsearchrpc_pb = require('../pb/graphsearchrpc_pb.js');

function serialize_graphsearch_GraphSearchReply(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.GraphSearchReply)) {
    throw new Error('Expected argument of type graphsearch.GraphSearchReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_GraphSearchReply(buffer_arg) {
  return pb_graphsearchrpc_pb.GraphSearchReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_GraphSearchRequest(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.GraphSearchRequest)) {
    throw new Error('Expected argument of type graphsearch.GraphSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_GraphSearchRequest(buffer_arg) {
  return pb_graphsearchrpc_pb.GraphSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_StatusReply(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.StatusReply)) {
    throw new Error('Expected argument of type graphsearch.StatusReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_StatusReply(buffer_arg) {
  return pb_graphsearchrpc_pb.StatusReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_StatusRequest(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.StatusRequest)) {
    throw new Error('Expected argument of type graphsearch.StatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_StatusRequest(buffer_arg) {
  return pb_graphsearchrpc_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_TrustedValidationReply(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.TrustedValidationReply)) {
    throw new Error('Expected argument of type graphsearch.TrustedValidationReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_TrustedValidationReply(buffer_arg) {
  return pb_graphsearchrpc_pb.TrustedValidationReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_TrustedValidationRequest(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.TrustedValidationRequest)) {
    throw new Error('Expected argument of type graphsearch.TrustedValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_TrustedValidationRequest(buffer_arg) {
  return pb_graphsearchrpc_pb.TrustedValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GraphSearchServiceService = exports.GraphSearchServiceService = {
  graphSearch: {
    path: '/graphsearch.GraphSearchService/GraphSearch',
    requestStream: false,
    responseStream: false,
    requestType: pb_graphsearchrpc_pb.GraphSearchRequest,
    responseType: pb_graphsearchrpc_pb.GraphSearchReply,
    requestSerialize: serialize_graphsearch_GraphSearchRequest,
    requestDeserialize: deserialize_graphsearch_GraphSearchRequest,
    responseSerialize: serialize_graphsearch_GraphSearchReply,
    responseDeserialize: deserialize_graphsearch_GraphSearchReply,
  },
  trustedValidation: {
    path: '/graphsearch.GraphSearchService/TrustedValidation',
    requestStream: false,
    responseStream: false,
    requestType: pb_graphsearchrpc_pb.TrustedValidationRequest,
    responseType: pb_graphsearchrpc_pb.TrustedValidationReply,
    requestSerialize: serialize_graphsearch_TrustedValidationRequest,
    requestDeserialize: deserialize_graphsearch_TrustedValidationRequest,
    responseSerialize: serialize_graphsearch_TrustedValidationReply,
    responseDeserialize: deserialize_graphsearch_TrustedValidationReply,
  },
  status: {
    path: '/graphsearch.GraphSearchService/Status',
    requestStream: false,
    responseStream: false,
    requestType: pb_graphsearchrpc_pb.StatusRequest,
    responseType: pb_graphsearchrpc_pb.StatusReply,
    requestSerialize: serialize_graphsearch_StatusRequest,
    requestDeserialize: deserialize_graphsearch_StatusRequest,
    responseSerialize: serialize_graphsearch_StatusReply,
    responseDeserialize: deserialize_graphsearch_StatusReply,
  },
};

exports.GraphSearchServiceClient = grpc.makeGenericClientConstructor(GraphSearchServiceService);
