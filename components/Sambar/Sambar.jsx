import Image from "next/image";
import React from "react";

function Sambar() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Самбар</h1>
      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Дэлгэцийн зүүн дээд талд самбар хэсэг байрлах ба энэ хуудсаас та
          статистик мэдээлэлүүдтэй дэлгэрэнгүй танилцах боломжтой болно.
        </h1>
      </div>

      <div className="flex flex-col md:mb-auto flex-1 ">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Нийт төгссөн ангийн тоо
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Идэвхитэй анги</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Сургалтууд</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Нийт сурагчидийн тоо
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Багш ажилчидийн тоо
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Сургуулийн зарлалууд
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Төлбөрийн мэдээлэл /Нийт төлбөр, Төлөгдсөн, Дутуу/
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
          className="w-[1000px] h-[479px] object-contain"
          src="/sambar.png"
          width={10000}
          height={10000}
          alt="Picture1"
        ></Image>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
          <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
            Самбар хэсгийн дэлгэцийн баруун талд мэдээллүүд харагдана.
          </h1>
        </div>
        <div className="flex flex-col md:mb-auto flex-1 ">
          <ul className="flex flex-col gap-3 w-full sm:max-w-md">
            <li className="w-full bg-gray-100 p-2 rounded-md">
              Хувийн мэдээлэл
            </li>
            <li className="w-full bg-gray-100 p-2 rounded-md">
              Нууцлал тохиргоо
            </li>
            <li className="w-full bg-gray-100 p-2 rounded-md">Гарах</li>
            <li className="w-full bg-gray-100 p-2 rounded-md">
              Зарлал үүсгэх/Холбоос/
            </li>
            <li className="w-full bg-gray-100 p-2 rounded-md">
              Хичээллийн ирц оруулах/Холбоос/
            </li>
            <li className="w-full bg-gray-100 p-2 rounded-md">
              Контент оруулах/Холбоос/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sambar;
