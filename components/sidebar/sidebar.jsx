"use client";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar() {
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSambarOpen, setIsSambarOpen] = useState(false);

  const toggleUsers = () => setIsUsersOpen(!isUsersOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleSambar = () => setIsSambarOpen(!isSambarOpen);

  return (
    <div className="w-[20%]">
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 text-black">
          <Link href="/" className="flex items-center ps-2.5 mb-5">
            <img
              src="/images.png"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Тусламж хэсэг
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            {/* Users Section */}
            <li>
              <button
                onClick={toggleUsers}
                className="flex items-center p-2 w-full text-left text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <span className="flex-1 ms-3">Үндсэн ойлголт</span>
                <svg
                  className={`w-5 h-5 transition duration-200 ${
                    isUsersOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <ul
                className={`ml-4 space-y-2 ${isUsersOpen ? "block" : "hidden"}`}
              >
                {/* Самбар Section */}
                <li>
                  <button
                    onClick={toggleSambar}
                    className="flex items-center p-2 w-full text-left text-gray-900 rounded-lg hover:bg-gray-100 group"
                  >
                    <span className="flex-1 ms-3">Нүүр</span>
                    <svg
                      className={`w-5 h-5 transition duration-200 ${
                        isSambarOpen ? "rotate-90" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`ml-4 space-y-2 ${
                      isSambarOpen ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link
                        href="/Nuur/Sambar"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Самбар</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Hereglegch"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Хэрэглэгчид</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Surgalttow"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Сургалтын төв</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/users/create"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Анги</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/users/create"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Хичээлийн хуваарь</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/users/create"
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                      >
                        <span className="ms-3">Санхүү</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Products Section */}
            <li>
              <button
                onClick={toggleProducts}
                className="flex items-center p-2 w-full text-left text-gray-900 rounded-lg group"
              >
                <span className="flex-1 ms-3">Түгээмэл асуулт</span>
                <svg
                  className={`w-5 h-5 transition duration-200 ${
                    isProductsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <ul
                className={`ml-4 space-y-2 ${
                  isProductsOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    href="/products/all"
                    className="flex items-center p-2 text-gray-900 rounded-lg group"
                  >
                    <span className="ms-3">All Products</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/create"
                    className="flex items-center p-2 text-gray-900 rounded-lg group"
                  >
                    <span className="ms-3">Create Product</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
