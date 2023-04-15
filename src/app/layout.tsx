import "./globals.css";

export const metadata = {
  title: "Chat GPT 42",
  description:
    "GPT42: não é só sobre a resposta, mas a pergunta certa! Vem bater um papo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
