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

export class TrustedValidationBulkRequest extends jspb.Message { 
    clearTxidsList(): void;
    getTxidsList(): Array<TrustedValidationRequest>;
    setTxidsList(value: Array<TrustedValidationRequest>): TrustedValidationBulkRequest;
    addTxids(value?: TrustedValidationRequest, index?: number): TrustedValidationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrustedValidationBulkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TrustedValidationBulkRequest): TrustedValidationBulkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrustedValidationBulkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrustedValidationBulkRequest;
    static deserializeBinaryFromReader(message: TrustedValidationBulkRequest, reader: jspb.BinaryReader): TrustedValidationBulkRequest;
}

export namespace TrustedValidationBulkRequest {
    export type AsObject = {
        txidsList: Array<TrustedValidationRequest.AsObject>,
    }
}

export class TrustedValidationBulkReply extends jspb.Message { 
    clearValidList(): void;
    getValidList(): Array<TrustedValidationReply>;
    setValidList(value: Array<TrustedValidationReply>): TrustedValidationBulkReply;
    addValid(value?: TrustedValidationReply, index?: number): TrustedValidationReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrustedValidationBulkReply.AsObject;
    static toObject(includeInstance: boolean, msg: TrustedValidationBulkReply): TrustedValidationBulkReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrustedValidationBulkReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrustedValidationBulkReply;
    static deserializeBinaryFromReader(message: TrustedValidationBulkReply, reader: jspb.BinaryReader): TrustedValidationBulkReply;
}

export namespace TrustedValidationBulkReply {
    export type AsObject = {
        validList: Array<TrustedValidationReply.AsObject>,
    }
}

export class OutputOracleRequest extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): OutputOracleRequest;

    getVout(): number;
    setVout(value: number): OutputOracleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputOracleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OutputOracleRequest): OutputOracleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputOracleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputOracleRequest;
    static deserializeBinaryFromReader(message: OutputOracleRequest, reader: jspb.BinaryReader): OutputOracleRequest;
}

export namespace OutputOracleRequest {
    export type AsObject = {
        txid: string,
        vout: number,
    }
}

export class OutputOracleReply extends jspb.Message { 
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): OutputOracleReply;

    getSig(): Uint8Array | string;
    getSig_asU8(): Uint8Array;
    getSig_asB64(): string;
    setSig(value: Uint8Array | string): OutputOracleReply;

    getTx(): Uint8Array | string;
    getTx_asU8(): Uint8Array;
    getTx_asB64(): string;
    setTx(value: Uint8Array | string): OutputOracleReply;

    getVout(): number;
    setVout(value: number): OutputOracleReply;

    getTokenid(): Uint8Array | string;
    getTokenid_asU8(): Uint8Array;
    getTokenid_asB64(): string;
    setTokenid(value: Uint8Array | string): OutputOracleReply;

    getTokentype(): number;
    setTokentype(value: number): OutputOracleReply;

    getValue(): number;
    setValue(value: number): OutputOracleReply;

    getIsBaton(): boolean;
    setIsBaton(value: boolean): OutputOracleReply;

    getGroupid(): Uint8Array | string;
    getGroupid_asU8(): Uint8Array;
    getGroupid_asB64(): string;
    setGroupid(value: Uint8Array | string): OutputOracleReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputOracleReply.AsObject;
    static toObject(includeInstance: boolean, msg: OutputOracleReply): OutputOracleReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputOracleReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputOracleReply;
    static deserializeBinaryFromReader(message: OutputOracleReply, reader: jspb.BinaryReader): OutputOracleReply;
}

export namespace OutputOracleReply {
    export type AsObject = {
        msg: Uint8Array | string,
        sig: Uint8Array | string,
        tx: Uint8Array | string,
        vout: number,
        tokenid: Uint8Array | string,
        tokentype: number,
        value: number,
        isBaton: boolean,
        groupid: Uint8Array | string,
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
