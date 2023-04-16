"use client";

import { ChatForm, Messages, Sidebar } from "@/components";
import { useChat } from "@/contexts/ChatContext";

export default function Home() {
  const { messages } = useChat();

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1 overflow-y-auto">
          <Messages data={messages} />
        </div>

        <div className="bg-gray-700 h-48">
          <ChatForm />
        </div>
      </div>
    </div>
  );
}
