export interface IMessage {
  id?: number;
  content: string;
  from: number;
  to: number;
  date?: Date;
}
