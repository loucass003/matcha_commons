export interface IMessage {
  id?: number;
  content: string;
  user_from: number;
  conversation: number;
  date?: string;
}
