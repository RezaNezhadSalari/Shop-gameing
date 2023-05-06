export default function SearchBar() {
  return (
    <div className="flex ml-auto px-3 py-2 space-x-6">
      <div className="relative flex  items-center text-gray-400 focus-within:text-gray-600 ">
        <input
          type="text"
          name="search"
          placeholder="search"
          autoComplete="off"
          aria-label="search"
          className="py-2 pr-3 outline-none pl-10 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-20 focus:ring-gray-500 focus:ring-2"
        />
        <div className="w-5 h-5 absolute right-3 bottom-[50%] translate-y-[50%] ml-3 pointer-events-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
