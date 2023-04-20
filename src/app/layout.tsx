import "./globals.css";

import { ChatProvider } from "@/contexts/ChatContext";
import Provider from "./Providers";

export const metadata = {
  title: "Chat GPT 42",
  description:
    "GPT42: não é só sobre a resposta, mas a pergunta certa! Vem bater um papo.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-600 text-gray-50 min-h-screen">
        <Provider>
          <ChatProvider>{children}</ChatProvider>
        </Provider>
      </body>
    </html>
  );
}
