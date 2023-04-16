import { IMessage } from "@/models";
import Message from "./Message";

type MessageProps = {
  data: IMessage[];
};

export default function Messages({ data }: MessageProps) {
  return (
    <div className="overflow-y-auto h-80 mb-6 h-screen">
      {data.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
