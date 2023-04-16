"use client";

import { IChatOptions, IMessage } from "@/models";
import { createContext, useContext, useEffect, useState } from "react";

const DATA: IMessage[] = [
  {
    id: "1",
    text: "Preciso de informações sobre o universo.",
    isUser: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    text: "O universo é uma vasta e complexa rede de matéria, energia, galáxias, estrelas, planetas, buracos negros e muito mais.",
    isUser: false,
    createdAt: new Date(),
  },
];

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

  useEffect(() => {
    setMessages(DATA);
  }, []);

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, options, updateOptions }}
    >
      {children}
    </ChatContext.Provider>
  );
}
