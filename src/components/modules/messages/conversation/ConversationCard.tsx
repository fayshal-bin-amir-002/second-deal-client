"use client";

import { IConversation } from "@/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import { useSocket } from "@/context/SocketContext";

const ConversationCard = ({
  conversation,
}: {
  conversation: IConversation;
}) => {
  const { onlineUsers } = useSocket();
  return (
    <Link href={`/messages/${conversation?._id}`}>
      <Card>
        <CardContent>
          <div className="flex gap-3 flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                {onlineUsers?.includes(conversation?._id) && (
                  <span className="size-3 bg-green-500 rounded-full absolute top-0 -right-1"></span>
                )}
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium text-gray-600">
                  {conversation?.name || "Unknown User"}
                </h4>
                <small
                  className={`${
                    conversation?.unseenCount > 0
                      ? "text-black font-medium"
                      : "text-gray-500"
                  } truncate max-w-sm `}
                >
                  Message: {conversation?.lastMessage}
                </small>
              </div>
            </div>
            <div>
              <div className="flex flex-row md:flex-col md:items-end gap-4 md:gap-2  text-gray-600">
                <span className="text-sm text-black font-medium">
                  {conversation?.unseenCount > 0 &&
                    `${conversation?.unseenCount} unread`}
                </span>
                <span className="text-sm">
                  {new Date(conversation?.lastMessageAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ConversationCard;
