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
      <div>
        <ul className="max-w-md space-y-1 text-black list-disc list-inside">
          <li>Нийт төгссөн ангийн тоо</li>
          <li>Идэвхитэй анги</li>
          <li>Сургалтууд</li>
          <li>Нийт сурагчидийн тоо</li>
          <li>Багш ажилчидийн тоо</li>
          <li>Сургуулийн зарлалууд</li>
          <li>Төлбөрийн мэдээлэл /Нийт төлбөр, Төлөгдсөн, Дутуу/</li>
        </ul>
      </div>

      <div className="py-5">
        <Image
          src="/Picture1.jpg"
          width={1000}
          height={1000}
          alt="Picture1"
        ></Image>
      </div>
      <div>
        <p className="text-lg py-5">
          Самбар хэсгийн дэлгэцийн баруун талд мэдээллүүд харагдана.
        </p>
        <ul className="max-w-md space-y-1 text-black list-disc list-inside">
          <li>Хувийн мэдээлэл</li>
          <li>Нууцлал тохиргоо</li>
          <li>Гарах</li>
          <li>Зарлал үүсгэх /Холбоос/</li>
          <li>Хичээллийн ирц оруулах /Холбоос/</li>
          <li>Контент оруулах /Холбоос/</li>
        </ul>
      </div>
    </div>
  );
}

export default Sambar;
