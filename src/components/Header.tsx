import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import { IconCaretDownFilled, IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [navOpen, setNavOpen] = useState<Boolean>(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as keyof typeof themes);
    setIsOpen(false);
  };

  const handleSelectBlur = () => {
    setTimeout(() => setIsOpen(false), 150);
  };

  const handleNavToggle = () => {
    setNavOpen((open) => !open);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 h-16 shadow bg-opacity-80 z-50 transition-colors ${themes[theme].bg} ${themes[theme].text}`}
    >
      <Link to="/" className="font-bold text-lg flex items-center gap-2">
        Dukanwala
      </Link>

      {/* hamburger menu  for mobile devices */}
      <button
        className="sm:hidden ml-auto mr-2 p-2 rounded focus:outline-none"
        onClick={handleNavToggle}
        aria-label={navOpen ? "Close Menu" : "Open Menu"}
      >
        {navOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
      </button>

      {/* links for desktop version  */}
      <nav className="space-x-4 hidden md:block">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
      {/* Custom styled select */}
      <div className="relative hidden sm:block ml-4">
        <select
          className={`
            rounded px-3 py-1 border outline-none
            bg-gray-100 text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            transition-colors
            appearance-none
            pr-8
            shadow
            cursor-pointer
          `}
          value={theme}
          onChange={handleSelectChange}
          onMouseDown={handleSelectClick}
          onBlur={handleSelectBlur}
        >
          {Object.entries(themes).map(([key, t]) => (
            <option value={key} key={key}>
              {t.name}
            </option>
          ))}
        </select>
        <div
          className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IconCaretDownFilled stroke={2} size={20} />
        </div>
      </div>

      {/* Mobile Nav drawer  */}
      {navOpen && (
        <div className="sm:hidden absolute top-16 inset-x-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-t z-50 shadow-lg flex flex-col px-6 py-4 gap-6">
          <Link
            to="/"
            onClick={handleNavClose}
            className="py-2 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleNavClose}
            className="py-2 hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={handleNavClose}
            className="py-2 hover:underline"
          >
            Contact
          </Link>
          <div className="relative">
            <select
              className={`
              rounded px-3 py-1 border outline-none
                bg-gray-100 text-gray-900
                dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                transition-colors
                appearance-none
                pr-8
                shadow
                cursor-pointer
                w-full  
            `}
              value={theme}
              onChange={handleSelectChange}
              onMouseDown={handleSelectClick}
              onBlur={handleSelectBlur}
            >
              {Object.entries(themes).map(([key, t]) => (
                <option value={key} key={key}>
                  {t.name}
                </option>
              ))}
            </select>
            <div
              className={`
              pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }  
            `}
            >
              <IconCaretDownFilled stroke={2} size={20} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
