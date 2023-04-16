"use client";

import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { IChatOptions, IMessage } from "@/models";
import { generateResponse } from "@/services";

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
    writingStyle: "poetic writing style,",
    tone: "\n\nPlease write in emotional tone,",
    output: "Portuguese language.",
  });

  const addMessage = async (message: string) => {
    try {
      const instruction: IMessage = {
        id: uuidv4(),
        text: message,
        isUser: true,
        createdAt: new Date(),
      };

      setMessages((prevMessages: any) => [...prevMessages, instruction]);

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

      setMessages((prevMessages: any) => [...prevMessages, responseMessage]);

      console.log("response", text);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  const updateOptions = (newOptions: Partial<IChatOptions>) => {
    setSettings((prevSettings: any) => ({ ...prevSettings, ...newOptions }));
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, options, updateOptions }}
    >
      {children}
    </ChatContext.Provider>
  );
}
