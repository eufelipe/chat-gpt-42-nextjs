import { ChatForm, Messages, Sidebar } from "./components";

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex-1 overflow-y-auto">
          <Messages />
        </div>

        <div className="bg-gray-700 h-48">
          <ChatForm />
        </div>
      </div>
    </div>
  );
}
