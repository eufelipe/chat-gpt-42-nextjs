"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { IChatOptions, IMessage } from "@/models";
import { generateResponse } from "@/services";

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
  addMessage: (message: string) => void;
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

  const addMessage = async (message: string) => {
    try {
      const instruction: IMessage = {
        id: uuidv4(),
        text: message,
        isUser: true,
        createdAt: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, instruction]);

      const response = await generateResponse({
        message,
        output: options.output,
        tone: options.tone,
        writingStyle: options.writingStyle,
      });

      const text = String(response[0].text);

      const responseMessage: IMessage = {
        id: uuidv4(),
        text,
        isUser: false,
        createdAt: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
    }
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
