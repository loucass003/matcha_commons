export interface IMessage {
  id?: number;
  content: string;
  from: number;
  conversation: number;
  date?: Date;
}
