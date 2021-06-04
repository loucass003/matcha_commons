import { Message } from "../../entity/Message";
import { required, str } from "../validation";
import { IDRule } from "./common-rules";
import { PaginatedResponse } from "./PaginatedResponse";
import { SSEPacket } from "./sse";
import { IUser } from "./user";

export type ChatPacket = SSEPacket &
  (
    | {
        type: "init";
        userWith: IUser;
        conversation: PaginatedResponse<Message>;
      }
    | { type: "message"; message: Message }
  );

export interface ISendMessagePost {
  to: number;
  content: string;
}

export interface IConversationsResponse {
  conversations: IUser[];
}

const sendMessageSchema = {
  to: IDRule,
  content: required().and(str.is()).and(str.max(400)),
};

export { sendMessageSchema };
