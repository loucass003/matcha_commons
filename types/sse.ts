import { IResponseError } from "./errors/ResponseError";

export type SSEPacket =
  | { type: string }
  | { type: "error"; error: IResponseError };

export type SSEChannel = "chat";
