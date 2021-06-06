import { IUser } from "./user";

export interface IConversation {
  id?: number;
  user_0: IUser;
  user_1: IUser;
  open: boolean;
}
