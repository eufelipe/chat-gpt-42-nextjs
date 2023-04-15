export default function Messages() {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <div className="overflow-y-auto h-80 mb-6 border-b border-gray-300 pb-4">
        <div className="mb-4">
          <div className="text-blue-500 font-semibold">ChatGPT42:</div>
          <div className="bg-blue-100 text-blue-800 rounded p-2 inline-block">
            Olá! Como posso ajudar?
          </div>
        </div>
        <div className="mb-4">
          <div className="text-green-500 font-semibold">Usuário:</div>
          <div className="bg-green-100 text-green-800 rounded p-2 inline-block">
            Preciso de informações sobre o universo.
          </div>
        </div>
      </div>
    </div>
  );
}
