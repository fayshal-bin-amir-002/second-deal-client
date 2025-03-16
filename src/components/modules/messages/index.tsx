"use client";

import { useSocket } from "@/context/SocketContext";
import { useUser } from "@/context/UserContext";
import { IConversation } from "@/types";
import { useEffect, useState } from "react";
import ConversationCard from "./conversation/ConversationCard";

const AllMessageManagement = () => {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const { socket } = useSocket();
  const { user } = useUser();
  const myId = user?.userId;

  useEffect(() => {
    if (socket && myId) {
      socket.emit("sidebar", myId);
      socket.on("sidebar-conversation", (data) => {
        setConversations(data);
      });

      return () => {
        socket.off("conversation");
      };
    }
  }, [socket, myId]);

  return (
    <div className="py-6 md:py-8 lg:py-10">
      {conversations?.length > 0 ? (
        <div className="flex flex-col gap-4">
          {conversations?.map((conversation: IConversation) => (
            <ConversationCard
              key={conversation?._id}
              conversation={conversation}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex justify-center items-center">
          <p className="text-lg font-medium">No Conversation</p>
        </div>
      )}
    </div>
  );
};

export default AllMessageManagement;
