
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem("userAuth");
    toast.success("Log Out Successfully");
    navigate("/login");
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-between items-center h-16 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 shadow-sm px-8 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Toaster/>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
          <span className="text-white font-black text-sm">B</span>
        </div>
        <h1 className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white">
          BOOK STORE APP
        </h1>
      </div>

      <ul className="flex gap-10 list-none items-center text-[13px] font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
        <li className="cursor-pointer transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white">
          HOME
        </li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white">
          ABOUT
        </li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white">
          CONTACT
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 cursor-pointer"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        <button
          className="py-2 px-6 bg-orange-500 hover:bg-orange-600 active:scale-95 rounded-full text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md shadow-orange-500/20"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Navbar;
