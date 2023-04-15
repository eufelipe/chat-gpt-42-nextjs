import Image from "next/image";

export default function Messages() {
  return (
    <div className="overflow-y-auto h-80 mb-6">
      <div className="pb-2">
        <div className="p-6 max-w-3xl mx-auto">
          <div className="flex items-center space-x-4">
            <Image
              src="/icon.png"
              alt="Picture of the author"
              className="w-10 h-10 rounded-full"
              width={32}
              height={32}
            />

            <div className="text-gray-100">Olá! Como posso ajudar?</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 pb-2">
        <div className="p-6 max-w-3xl mx-auto bg-gray-700">
          <div className="flex items-center space-x-4">
            <Image
              src="https://github.com/eufelipe.png"
              alt="Picture of the author"
              className="w-10 h-10 rounded-full"
              width={32}
              height={32}
            />

            <div className="text-gray-100">
              Preciso de informações sobre o universo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
