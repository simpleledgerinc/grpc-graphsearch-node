// GENERATED CODE -- DO NOT EDIT!

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

function serialize_graphsearch_OutputOracleReply(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.OutputOracleReply)) {
    throw new Error('Expected argument of type graphsearch.OutputOracleReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_OutputOracleReply(buffer_arg) {
  return pb_graphsearchrpc_pb.OutputOracleReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_OutputOracleRequest(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.OutputOracleRequest)) {
    throw new Error('Expected argument of type graphsearch.OutputOracleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_OutputOracleRequest(buffer_arg) {
  return pb_graphsearchrpc_pb.OutputOracleRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_graphsearch_TrustedValidationBulkReply(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.TrustedValidationBulkReply)) {
    throw new Error('Expected argument of type graphsearch.TrustedValidationBulkReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_TrustedValidationBulkReply(buffer_arg) {
  return pb_graphsearchrpc_pb.TrustedValidationBulkReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graphsearch_TrustedValidationBulkRequest(arg) {
  if (!(arg instanceof pb_graphsearchrpc_pb.TrustedValidationBulkRequest)) {
    throw new Error('Expected argument of type graphsearch.TrustedValidationBulkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graphsearch_TrustedValidationBulkRequest(buffer_arg) {
  return pb_graphsearchrpc_pb.TrustedValidationBulkRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  trustedValidationBulk: {
    path: '/graphsearch.GraphSearchService/TrustedValidationBulk',
    requestStream: false,
    responseStream: false,
    requestType: pb_graphsearchrpc_pb.TrustedValidationBulkRequest,
    responseType: pb_graphsearchrpc_pb.TrustedValidationBulkReply,
    requestSerialize: serialize_graphsearch_TrustedValidationBulkRequest,
    requestDeserialize: deserialize_graphsearch_TrustedValidationBulkRequest,
    responseSerialize: serialize_graphsearch_TrustedValidationBulkReply,
    responseDeserialize: deserialize_graphsearch_TrustedValidationBulkReply,
  },
  outputOracle: {
    path: '/graphsearch.GraphSearchService/OutputOracle',
    requestStream: false,
    responseStream: false,
    requestType: pb_graphsearchrpc_pb.OutputOracleRequest,
    responseType: pb_graphsearchrpc_pb.OutputOracleReply,
    requestSerialize: serialize_graphsearch_OutputOracleRequest,
    requestDeserialize: deserialize_graphsearch_OutputOracleRequest,
    responseSerialize: serialize_graphsearch_OutputOracleReply,
    responseDeserialize: deserialize_graphsearch_OutputOracleReply,
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
