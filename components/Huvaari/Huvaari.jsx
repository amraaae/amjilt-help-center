import React from "react";
import Image from "next/image";

function Huvaari() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Хичээлий хуваарь</h1>
      <p className="text-lg py-5">
        Дэлгэцийн зүүн дээд талд хуваари хэсэгт дарж дараах мэдээллүүдийг харж
        болно.
      </p>

      <div className="flex flex-col md:mb-auto flex-1 ">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Тухайн долоо хоногт орох нийт хичээлүүдийн аль гаригт хэддүгээр цаг
            дээр орохыг харж болно.
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
          className="w-[1000px] h-[479px] "
          src="/Picture9.jpg"
          alt="Picture of the author"
          width={1000}
          height={479}
        />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Дэлгэцийн зүүн талд байх хэсэгт ангийн мэдээллийг оруулан зөвхөн
            тухайн ангийн хуваарийг шүүж харах боломжтой.
          </h2>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">2</span>
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Дэлгэцийн зүүн доод буланд байрлах ногоон өнгийн хуваарь нэмэх
            хэсэгт дарна.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Huvaari;
