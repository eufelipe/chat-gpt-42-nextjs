"use client";

import { IChatOptions, IMessage } from "@/models";
import { createContext, useContext, useState } from "react";

interface ChatContextData {
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
  options: IChatOptions;
  updateOptions: (newOptions: Partial<IChatOptions>) => void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

export function useChat(): ChatContextData {
  return useContext(ChatContext);
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [options, setSettings] = useState<IChatOptions>({
    writingStyle: "Default",
    tone: "Default",
    output: "Português",
  });

  const addMessage = (message: IMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const updateOptions = (newOptions: Partial<IChatOptions>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newOptions }));
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, options, updateOptions }}
    >
      {children}
    </ChatContext.Provider>
  );
}
