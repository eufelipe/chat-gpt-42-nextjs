import ChatOptions from "./ChatOptions";

export default function ChatForm() {
  return (
    <form className="space-y-4 bg-gray-800 p-6 max-w-3xl mt-4 mx-auto rounded">
      <ChatOptions />

      <div className="flex space-x-4">
        <input
          type="text"
          className="flex-grow border border-gray-500 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300"
          placeholder="Digite sua mensagem..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold p-2 rounded inline-flex items-center"
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
