export default function ChatOptions() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-6">
        <div className="flex-col ">
          <label htmlFor="output" className="font-light text-sm text-gray-500 ">
            Output in:
          </label>
          <br />
          <select
            id="output"
            className="w-max-40 border border-gray-500 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300"
          >
            <option>Português</option>
            <option>Inglês</option>
          </select>
        </div>
        <div className="flex-col">
          <label htmlFor="tone" className="font-light text-sm text-gray-500">
            Tone:
          </label>
          <br />
          <select
            id="tone"
            className="w-max-40 border border-gray-500 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300"
          >
            <option>Default</option>
            <option>Emotional</option>
          </select>
        </div>

        <div className="flex-col">
          <label
            htmlFor="writingStyle"
            className="font-light text-sm text-gray-500"
          >
            Writting Style:
          </label>
          <br />
          <select
            id="writingStyle"
            className="w-max-40 border border-gray-500 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300"
          >
            <option>Default</option>
            <option>Poético</option>
          </select>
        </div>
      </div>
      <div className="flex-col ml-4">
        <button className="w-max-32 mt-6 text-white bg-gray-700 rounded p-2 focus:outline-none focus:border-blue-300">
          Continue
        </button>
      </div>
    </div>
  );
}
