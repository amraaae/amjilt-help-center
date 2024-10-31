import React from "react";
import Image from "next/image";
function Angi() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Анги</h1>
      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Дэлгэцийн зүүн дээд талд хуваари хэсэгт дарж дараах мэдээллүүдийг харж
          болно.
        </h1>
      </div>

      <div className="flex md:mb-auto flex-1">
        <ul className="flex gap-3 w-max">
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Дэлгэцийн зүүн дээд хэсэгт байх ногоон өнгийн нэмэх гэсэн дээр
            дарна.
          </li>
        </ul>
      </div>

      <div className="py-4">
        <Image
          className="w-full"
          src="/angi2.png"
          alt="Picture of the author"
          width={10000}
          height={10000}
        />
      </div>

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Нэмэх хэсэгт дарсны дараа дэлгэц дараах байдлаар харагдана. /ТМС/
        </h1>
      </div>

      <div className="hero ">
        <div className="hero-content w-full flex-col lg:flex-row">
          <Image
            src="/angi3.png"
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
                  Шинээр нэмж буй ангийн нэрийг оруулна.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Төлөв хэсгийг идэвхитэй гэж сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Сургалтын нэрийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Эхлэх болон дуусах огноог оруулна.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Анги даасан багшийг сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-8 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хөтөлбөрийн эхлэх болон дуусах огноог оруулна.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">7</span>
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
          Нэмэх хэсэгт дарсны дараа дэлгэц дараах байдлаар харагдана. /ТМС/
        </h1>
      </div>

      <div className="py-4">
        <Image
          className="w-full"
          src="/angi.png"
          alt="Picture of the author"
          width={10000}
          height={10000}
        />
      </div>
    </div>
  );
}

export default Angi;
