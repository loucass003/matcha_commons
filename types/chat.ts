import { required, str } from "../validation";
import { IDRule } from "./common-rules";
import { IResponseError } from "./errors/ResponseError";
import { IMessage } from "./message";
import { PaginatedResponse } from "./PaginatedResponse";
import { SSEPacket } from "./sse";
import { IUser } from "./user";

export type ChatPacket = SSEPacket &
  (
    | {
        type: "init";
        userWith: IUser;
        conversation: PaginatedResponse<IMessage>;
      }
    | { type: "message"; message: IMessage }
    | { type: "error"; error: IResponseError }
  );

export interface ISendMessagePost {
  to: number;
  content: string;
}

const sendMessageSchema = {
  to: IDRule,
  content: required().and(str.is()).and(str.max(400)),
};

export { sendMessageSchema };
