import React from "react";
import Image from "next/image";

function Hereglegch() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Хэрэглэгчид</h1>
      <p className="text-lg py-5">
        Дэлгэцийн зүүн дээд талд хэрэгэлчид хэсэгт дарж дараах мэдээллүүдийг
        харж болно.{" "}
      </p>

      <div className="flex flex-col md:mb-auto flex-1">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">Сурагчдын жагсаалт</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Багшийн жагсаалт</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Асран хамгаалагчийн жагсаалт
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Менежерүүдийн жагсаалт
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
        className="w-[649px] h-[310px] object-cover"
          src="/Picture2.jpg"
          width={5000}
          height={5000}
          alt="Picture1"
        ></Image>
      </div>
    </div>
  );
}

export default Hereglegch;
