import React from "react";
import Image from "next/image";

function Huvaari() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Хичээлий хуваарь</h1>
      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Дэлгэцийн зүүн дээд талд хуваари хэсэгт дарж дараах мэдээллүүдийг харж
          болно.
        </h1>
      </div>

      <div className="flex flex-col md:mb-auto flex-1">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Тухайн долоо хоногт орох нийт хичээлүүдийн аль гаригт хэддүгээр цаг
            дээр орохыг харж болно.
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
          className="w-full"
          src="/huvaari1.png"
          alt="Picture of the author"
          width={10000}
          height={10000}
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

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Дэлгэцийн зүүн доод буланд байрлах ногоон өнгийн хуваарь нэмэх хэсэгт
          дарна.
        </h1>
      </div>

      <div className="hero">
        <div className="hero-content w-full flex-col lg:flex-row">
          <Image
            src="/huvaari2.png"
            width={10000}
            height={10000}
            alt="Picture5"
            className="max-w-md"
          />
          <div className="px-10 w-full">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээлийн хуваарь нэмэж оруулж буй ангийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Танхимийн тоотыг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээлийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээлийн төрлийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Багшийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээлийг аль гаригийн аль ээлжийн хэддүгээр цаг дээр орохыг
                  сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Оруулсан мэдээлэлээ шалгаад хадгалах хэсэгт дарна.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Шинээр оруулсан хичээлийн хуваарь дараах байдлаар харагдана.
        </h1>
      </div>

      <div className="py-4">
        <Image
          className="w-full"
          src="/huvaari3.png"
          alt="Picture11"
          width={10000}
          height={10000}
        />
      </div>
    </div>
  );
}

export default Huvaari;
