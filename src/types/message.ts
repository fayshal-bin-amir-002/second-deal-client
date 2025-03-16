export interface IMessage {
  _id: string;
  sender: string;
  receiver: string;
  message: string;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IConversation {
  _id: string;
  email: string;
  name: string;
  lastMessage: string;
  lastMessageAt: string;
  unseenCount: number;
}
