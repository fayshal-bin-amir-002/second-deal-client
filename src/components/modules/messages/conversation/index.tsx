"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSocket } from "@/context/SocketContext";
import { useUser } from "@/context/UserContext";
import { IMessage, IMessageUser } from "@/types";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ConversationManagement = ({ id }: { id: string }) => {
  const [currentUser, setCurrentUser] = useState<IMessageUser | null>(null);
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const router = useRouter();
  const { socket, onlineUsers } = useSocket();
  const { user } = useUser();
  const myId = user?.userId;

  useEffect(() => {
    if (id && myId && id === myId) {
      router.push("/messages");
    }
  }, [id, myId]);

  useEffect(() => {
    if (socket && id && myId !== id) {
      socket.emit("message-page", id);
      socket.emit("seen-message", id);
      socket.on("message-user", (data) => {
        setCurrentUser(data);
      });
      socket.on("conversation", (data) => {
        setMessages(data);
      });
      socket.on("message", (data) => {
        if (data.sender.toString() === id || data.receiver.toString() === id) {
          setMessages((prev) => [data, ...prev]);
        }
      });

      return () => {
        socket.off("message-user");
        socket.off("conversation");
        socket.off("message");
      };
    }
  }, [socket, id, myId]);

  const isOnline = onlineUsers?.includes(id) && currentUser?.isOnline === true;

  const sendMessage = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const newMessage = form?.message?.value;
    if (newMessage.trim() !== "" && socket) {
      const payload = {
        sender: myId,
        receiver: id,
        message: newMessage,
      };
      socket.emit("new-message", payload);
    }
    form.reset();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-72px-250px)]">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3">
        <div className="relative">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          {isOnline && (
            <span className="size-3 bg-green-500 rounded-full absolute top-0 -right-1"></span>
          )}
        </div>
        <h4 className="font-medium text-gray-600">
          {currentUser?.name || "Unknown User"}
        </h4>
      </div>
      <Separator />

      {/* Messages Section */}
      <div className="flex-1 flex flex-col-reverse overflow-y-auto gap-2 p-2">
        {messages?.length > 0 &&
          messages.map((msg: IMessage, index: number) => (
            <div
              key={index}
              className={`max-w-sm px-4 py-2 rounded-md ${
                msg.sender === myId
                  ? "bg-blue-400 text-white ms-auto text-right"
                  : "bg-gray-200 mr-auto"
              }`}
            >
              {msg.message}
            </div>
          ))}
      </div>

      {/* Input Field & Send Button */}
      <form onSubmit={sendMessage} className="flex gap-2 pt-3 border-t">
        <Input
          autoComplete="off"
          name="message"
          type="text"
          placeholder="Type a message..."
          defaultValue=""
          className="flex-1"
        />
        <Button type="submit">
          Send <SendHorizontal />
        </Button>
      </form>
    </div>
  );
};

export default ConversationManagement;
