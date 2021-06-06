import { required, str } from "../validation";
import { IDRule } from "./common-rules";
import { IConversation } from "./conversation";
import { IResponseError } from "./errors/ResponseError";
import { IMessage } from "./message";
import { PaginatedResponse } from "./PaginatedResponse";
import { SSEPacket } from "./sse";

export type ChatPacket = SSEPacket &
  (
    | {
        type: "init";
        conversation: IConversation;
        messages: PaginatedResponse<IMessage>;
      }
    | { type: "message"; message: IMessage }
    | { type: "error"; error: IResponseError }
  );

export interface ISendMessagePost {
  conversation: number;
  content: string;
}

const sendMessageSchema = {
  conversation: IDRule,
  content: required().and(str.is()).and(str.max(400)),
};

export { sendMessageSchema };
