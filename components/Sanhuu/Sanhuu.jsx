import React from "react";
import Image from "next/image";

function Sanhuu() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Санхүү</h1>
      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Шинэ анги хадгалсаны дараа доорх байдлаар харагдана. /ТМС/
        </h1>
      </div>
      <div className="flex flex-col md:mb-auto flex-1">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">Хөнгөлөлт</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Төлбөр</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Төлбөр цуцлалт</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Төлбөрийн буцаалт
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Орлого,зарлага</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Нэхэмжлэл үүсээгүй
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Шинэ элсэлт</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Гэрээ сунгалт зэргийг харж болно.
          </li>
        </ul>
      </div>
      <div className="py-5">
        <Image
          className="w-full"
          src="/sanhuu1.png"
          alt="sanhuu"
          width={10000}
          height={10000}
        />
      </div>

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Хөнгөлөлт хэсэгт дарахад дэлгэцэнд дараах байдлаар харагдана.
        </h1>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Дэлгэцийн дээд хэсэгт байх ногоон өнгийн нэмэх гэсэн дээр дарна.
          </h2>
        </div>
      </div>

      <div className="py-5">
        <Image
          className="w-full"
          src="/sanhuu2.png"
          alt="sanhuu"
          width={10000}
          height={10000}
        />
      </div>

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Нэмэх хэсэгт дарсны дараа дэлгэц дараах байдлаар харагдана.
        </h1>
      </div>

      <div className="hero ">
        <div className="hero-content w-full flex-col lg:flex-row">
          <Image
            src="/sanhuu3.png"
            width={10000}
            height={10000}
            alt="Picture13"
            className="max-w-md"
          />
          <div className="px-10 w-full">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Гарчиг хэсэгт хөнгөлөлтийн нэр.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-9 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хөнгөлөлтийн төрлийг мөнгөөр эсвэл хувиар хэрхэн тооцохыг
                  сонгоно.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-8 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Тайлбар хэсэгт хөнгөлөлттэй холбоотой нэмэлт тайлбарыг
                  оруулана.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-7 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хөнгөлөлтийн хувь хэмжээ эсвэл үнийн дүнг оруулана.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 py-5 justify-center text-lg font-serif">
        <h1 className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
          Шинээр оруулсан хөнгөлөлт дараах байдлаар харагдана.
        </h1>
      </div>

      <div>
        <Image
          className="w-full"
          src="/sanhuu4.png"
          alt="sanhuu"
          width={10000}
          height={10000}
        />
      </div>
    </div>
  );
}

export default Sanhuu;
