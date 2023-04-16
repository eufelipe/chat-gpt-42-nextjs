import { IMessage } from "@/models";
import Image from "next/image";

type MessageProps = {
  message: IMessage;
};

export default function Message({ message }: MessageProps) {
  const { isUser, text } = message;

  return (
    <div className={`pb-2 ${isUser ? "bg-gray-700" : ""}`}>
      <div className={`p-6 max-w-3xl mx-auto `}>
        <div className="flex items-center space-x-4">
          <Image
            src={isUser ? "https://github.com/eufelipe.png" : "/icon.png"}
            alt="Picture of the author"
            className="w-10 h-10 rounded-full"
            width={32}
            height={32}
          />

          <div className="text-gray-100">{text}</div>
        </div>
      </div>
    </div>
  );
}
