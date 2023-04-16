import { ChatForm, Messages, Sidebar } from "@/components";
import { IMessage } from "@/models";

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

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1 overflow-y-auto">
          <Messages data={DATA} />
        </div>

        <div className="bg-gray-700 h-48">
          <ChatForm />
        </div>
      </div>
    </div>
  );
}
