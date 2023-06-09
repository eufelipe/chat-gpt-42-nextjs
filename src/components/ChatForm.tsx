import { useChat } from "@/contexts/ChatContext";
import ChatOptions from "./ChatOptions";

import { useForm } from "react-hook-form";

export default function ChatForm() {
  const { register, handleSubmit, watch } = useForm();
  const { addMessage } = useChat();

  const onSubmit = ({ message }: any) => {
    console.log(message);

    addMessage(message);
  };

  console.log(watch("message"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-gray-800 p-6 max-w-3xl mt-4 mx-auto rounded"
    >
      <ChatOptions />

      <div className="flex space-x-4">
        <input
          {...register("message")}
          type="text"
          className="flex-grow border border-gray-500 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300"
          placeholder="Digite sua mensagem..."
        />
        <button
          type="submit"
          className="bg-teal-900 text-white font-semibold p-2 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
