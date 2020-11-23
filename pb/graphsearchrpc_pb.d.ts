// package: graphsearch
// file: pb/graphsearchrpc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GraphSearchRequest extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): GraphSearchRequest;

    clearExcludeTxidsList(): void;
    getExcludeTxidsList(): Array<string>;
    setExcludeTxidsList(value: Array<string>): GraphSearchRequest;
    addExcludeTxids(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraphSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GraphSearchRequest): GraphSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraphSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraphSearchRequest;
    static deserializeBinaryFromReader(message: GraphSearchRequest, reader: jspb.BinaryReader): GraphSearchRequest;
}

export namespace GraphSearchRequest {
    export type AsObject = {
        txid: string,
        excludeTxidsList: Array<string>,
    }
}

export class GraphSearchReply extends jspb.Message { 
    clearTxdataList(): void;
    getTxdataList(): Array<Uint8Array | string>;
    getTxdataList_asU8(): Array<Uint8Array>;
    getTxdataList_asB64(): Array<string>;
    setTxdataList(value: Array<Uint8Array | string>): GraphSearchReply;
    addTxdata(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GraphSearchReply.AsObject;
    static toObject(includeInstance: boolean, msg: GraphSearchReply): GraphSearchReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GraphSearchReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GraphSearchReply;
    static deserializeBinaryFromReader(message: GraphSearchReply, reader: jspb.BinaryReader): GraphSearchReply;
}

export namespace GraphSearchReply {
    export type AsObject = {
        txdataList: Array<Uint8Array | string>,
    }
}

export class TrustedValidationRequest extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): TrustedValidationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrustedValidationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrustedValidationRequest): TrustedValidationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrustedValidationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrustedValidationRequest;
    static deserializeBinaryFromReader(message: TrustedValidationRequest, reader: jspb.BinaryReader): TrustedValidationRequest;
}

export namespace TrustedValidationRequest {
    export type AsObject = {
        txid: string,
    }
}

export class TrustedValidationReply extends jspb.Message { 
    getValid(): boolean;
    setValid(value: boolean): TrustedValidationReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrustedValidationReply.AsObject;
    static toObject(includeInstance: boolean, msg: TrustedValidationReply): TrustedValidationReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrustedValidationReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrustedValidationReply;
    static deserializeBinaryFromReader(message: TrustedValidationReply, reader: jspb.BinaryReader): TrustedValidationReply;
}

export namespace TrustedValidationReply {
    export type AsObject = {
        valid: boolean,
    }
}

export class StatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusRequest;
    static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
    export type AsObject = {
    }
}

export class StatusReply extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): StatusReply;

    getBestBlockHash(): string;
    setBestBlockHash(value: string): StatusReply;

    getLastIncomingZmqTxUnix(): number;
    setLastIncomingZmqTxUnix(value: number): StatusReply;

    getLastOutgoingZmqTxUnix(): number;
    setLastOutgoingZmqTxUnix(value: number): StatusReply;

    getLastIncomingZmqTx(): string;
    setLastIncomingZmqTx(value: string): StatusReply;

    getLastOutgoingZmqTx(): string;
    setLastOutgoingZmqTx(value: string): StatusReply;

    getLastIncomingZmqBlkUnix(): number;
    setLastIncomingZmqBlkUnix(value: number): StatusReply;

    getLastOutgoingZmqBlkUnix(): number;
    setLastOutgoingZmqBlkUnix(value: number): StatusReply;

    getLastIncomingZmqBlkSize(): number;
    setLastIncomingZmqBlkSize(value: number): StatusReply;

    getLastOutgoingZmqBlkSize(): number;
    setLastOutgoingZmqBlkSize(value: number): StatusReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusReply.AsObject;
    static toObject(includeInstance: boolean, msg: StatusReply): StatusReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusReply;
    static deserializeBinaryFromReader(message: StatusReply, reader: jspb.BinaryReader): StatusReply;
}

export namespace StatusReply {
    export type AsObject = {
        blockHeight: number,
        bestBlockHash: string,
        lastIncomingZmqTxUnix: number,
        lastOutgoingZmqTxUnix: number,
        lastIncomingZmqTx: string,
        lastOutgoingZmqTx: string,
        lastIncomingZmqBlkUnix: number,
        lastOutgoingZmqBlkUnix: number,
        lastIncomingZmqBlkSize: number,
        lastOutgoingZmqBlkSize: number,
    }
}
