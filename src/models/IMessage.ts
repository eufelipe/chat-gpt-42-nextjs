export default interface IMessage {
  id: string;
  text: string;
  isUser: boolean;
  createdAt: Date;
}
