"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // 모바일시 햄버거 메뉴 클릭 여부
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold">
            LOGO
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
              href="/project"
              className="text-xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
            >
              Project
            </Link>
          <Link
            href="/about"
            className="text-xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block text-gray-800 dark:text-white hover:text-blue-500">
              Home
            </Link>
            <Link
              href="/blog"
              className="block text-gray-800 dark:text-white hover:text-blue-500"
            >
              Blog
            </Link>
            <Link
              href="/project"
              className="block text-gray-800 dark:text-white hover:text-blue-500"
            >
              Project
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 dark:text-white hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/login"
              className="block text-gray-800 dark:text-white hover:text-blue-500"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
