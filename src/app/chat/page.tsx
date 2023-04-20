"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { ChatForm, Messages, Sidebar } from "@/components";
import { useChat } from "@/contexts/ChatContext";

export default async function Chat() {
  const { messages } = useChat();
  const router = useRouter();

  const { status } = useSession({
    required: true,
  });

  useEffect(() => {
    if (!status || !router) return;

    if (status !== "authenticated") {
      console.log("Not authenticated, redirecting to signin page");
      router.push("/signin");
    }
  }, [router, status]);

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
