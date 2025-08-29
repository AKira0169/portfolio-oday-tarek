import { useState } from "react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 md:hidden">
      <div />
      <button onClick={() => setIsOpen(!isOpen)} className="z-50">
        <svg
          className="h-6 w-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-40 transform bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="mt-20 flex flex-col items-center space-y-8">
          <a href="#" className="text-2xl text-gray-800">
            Works
          </a>
          <a href="#" className="text-2xl text-gray-800">
            Blog
          </a>
          <a href="#" className="text-2xl text-gray-800">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
