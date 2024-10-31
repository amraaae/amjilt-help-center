import React from "react";


function Sambar() {
  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold">Самбар</h1>
      <p className="text-xl">
        Дэлгэцийн зүүн дээд талд самбар хэсэг байрлах ба энэ хуудсаас та
        статистик мэдээлэлүүдтэй дэлгэрэнгүй танилцах боломжтой болно.
      </p>
      <ul className="max-w-md space-y-1 text-black list-disc list-inside">
        <li>Нийт төгссөн ангийн тоо</li>
        <li>Идэвхитэй анги</li>
        <li>Сургалтууд</li>
        <li>Контентийн тоо</li>
      </ul>
    </div>
  );
}

export default Sambar;
