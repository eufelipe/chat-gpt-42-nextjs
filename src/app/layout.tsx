import "./globals.css";

export const metadata = {
  title: "Chat GPT 42",
  description:
    "GPT42: não é só sobre a resposta, mas a pergunta certa! Vem bater um papo.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-600 text-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
