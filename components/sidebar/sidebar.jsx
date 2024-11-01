"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  House,
  Presentation,
  UsersRound,
  Building2,
  BookOpenText,
  Album,
  NotebookPen,
} from "lucide-react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSambarOpen, setIsSambarOpen] = useState(false);

  const toggleUsers = () => setIsUsersOpen(!isUsersOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleSambar = () => setIsSambarOpen(!isSambarOpen);

  const isActiveLink = (link) => pathname === link || pathname.startsWith(link);

  return (
    <div className="w-[20%]">
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#553ded] text-[#c7c0f9]">
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
                className="flex items-center p-2 w-full text-left rounded-lg hover:text-gray-100 group"
              >
                <House width={18} height={18} />
                <span
                  className="flex-1 ms-2
"
                >
                  Үндсэн ойлголт
                </span>
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
                {/* Нүүр Section */}
                <li>
                  <button
                    onClick={toggleSambar}
                    className="flex items-center p-2 w-full text-left rounded-lg hover:text-gray-100 group"
                  >
                    <span
                      className="flex-1 ms-2
"
                    >
                      Нүүр
                    </span>
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
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Sambar")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <Presentation width={18} height={18} />
                        <span className="ms-2">Самбар</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Hereglegch"
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Hereglegch")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <UsersRound width={18} height={18} />
                        <span className="ms-2">Хэрэглэгчид</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Surgalttow"
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Surgalttow")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <Building2 width={18} height={18} />
                        <span className="ms-2">Сургалтын төв</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Angi"
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Angi")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <BookOpenText width={18} height={18} />
                        <span className="ms-2">Анги</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Huvaari"
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Huvaari")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <Album width={18} height={18} />
                        <span className="ms-2">Хичээлийн хуваарь</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Nuur/Sanhuu"
                        className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                          isActiveLink("/Nuur/Sanhuu")
                            ? "text-[#ffffff] bg-[#492feb] font-semibold"
                            : ""
                        }`}
                      >
                        <NotebookPen width={18} height={18} />
                        <span className="ms-2">Санхүү</span>
                      </Link>
                    </li>
                    {/* Танхим Section */}
                    <li>
                      <button
                        onClick={toggleProducts}
                        className="flex items-center p-2 w-full text-left rounded-lg hover:text-gray-100 group"
                      >
                        <span className="flex-1 ms-2">Танхим</span>
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
                            href="/Nuur/Sambar"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/Nuur/Sambar")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Сургалтууд</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Nuur/Hereglegch"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/Nuur/Hereglegch")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Хөтөлбөр хичээлүүд</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Nuur/Surgalttow"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/Nuur/Surgalttow")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Анги</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/users/create"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/users/create")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Хичээлийн жил</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/users/create"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/users/create")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Ээлж - ЕБС</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/users/create"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/users/create")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Хичээлийн улирал</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/users/create"
                            className={`flex items-center p-2 rounded-lg hover:text-gray-100 group ${
                              isActiveLink("/users/create")
                                ? "text-[#ffffff] bg-[#492feb] font-semibold"
                                : ""
                            }`}
                          >
                            <span className="ms-2">Барилга байгууламж</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
