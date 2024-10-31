import Image from "next/image";
import React from "react";

function Sambar() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Самбар</h1>
      <p className="text-lg py-5">
        Дэлгэцийн зүүн дээд талд самбар хэсэг байрлах ба энэ хуудсаас та
        статистик мэдээлэлүүдтэй дэлгэрэнгүй танилцах боломжтой болно.
      </p>
      <div class="flex flex-col md:mb-auto flex-1 ">
        <ul class="flex flex-col gap-3 w-full sm:max-w-md">
          <li class="w-full bg-gray-100 p-2 rounded-md">
            Нийт төгссөн ангийн тоо
          </li>
          <li class="w-full bg-gray-100 p-2 rounded-md">Идэвхитэй анги</li>
          <li class="w-full bg-gray-100 p-2 rounded-md">Сургалтууд</li>
          <li class="w-full bg-gray-100 p-2 rounded-md">
            Нийт сурагчидийн тоо
          </li>
          <li class="w-full bg-gray-100 p-2 rounded-md">Багш ажилчидийн тоо</li>
          <li class="w-full bg-gray-100 p-2 rounded-md">
            Сургуулийн зарлалууд
          </li>
          <li class="w-full bg-gray-100 p-2 rounded-md">
            Төлбөрийн мэдээлэл /Нийт төлбөр, Төлөгдсөн, Дутуу/
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
          className="w-[1000px] h-[479px] object-contain"
          src="/Picture1.jpg"
          width={5000}
          height={5000}
          alt="Picture1"
        ></Image>
      </div>
      <div>
        <p className="text-lg py-5">
          Самбар хэсгийн дэлгэцийн баруун талд мэдээллүүд харагдана.
        </p>
        <div class="flex flex-col md:mb-auto flex-1 ">
          <ul class="flex flex-col gap-3 w-full sm:max-w-md">
            <li class="w-full bg-gray-100 p-2 rounded-md">Хувийн мэдээлэл</li>
            <li class="w-full bg-gray-100 p-2 rounded-md">Нууцлал тохиргоо</li>
            <li class="w-full bg-gray-100 p-2 rounded-md">Гарах</li>
            <li class="w-full bg-gray-100 p-2 rounded-md">
              Зарлал үүсгэх/Холбоос/
            </li>
            <li class="w-full bg-gray-100 p-2 rounded-md">
              Хичээллийн ирц оруулах/Холбоос/
            </li>
            <li class="w-full bg-gray-100 p-2 rounded-md">
              Контент оруулах/Холбоос/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sambar;
