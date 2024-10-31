import React from "react";
import Image from "next/image";

function Surgalttow() {
  return (
    <div className="w-full px-20">
      <h1 className="text-2xl font-bold">Сургалтын төв</h1>
      <p className="text-lg py-5">
        Дэлгэцийн зүүн дээд талд сургалтын төв хэсэгт дарж дараах мэдээллүүдийг
        харах боломжтой.
      </p>

      <div className="flex flex-col md:mb-auto flex-1">
        <ul className="flex flex-col gap-3 w-full sm:max-w-md">
          <li className="w-full bg-gray-100 p-2 rounded-md">Сургалтууд</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Түвшин</li>
          <li className="w-full bg-gray-100 p-2 rounded-md">
            Хөтөлбөр хичээлүүд
          </li>
          <li className="w-full bg-gray-100 p-2 rounded-md">Танхим</li>
        </ul>
      </div>

      <p className="text-lg py-5">
        Дээрх хэсгүүдээс өөрийн мэдээлэл нэмэх шаардлагатай хэсэгээ дарж
        дэлгэцийн зүүн дээд хэсэгт байх ногоон өнгийн нэмэх гэсэн дээр дарж
        мэдээллээ оруулж болно. /ТМС/
      </p>

      <div className="py-4">
        <Image
          className="w-full h-[479px]"
          src="/surgalt.png"
          width={10000}
          height={10000}
          alt="Picture1"
        />
      </div>

      <p className="text-lg py-5">
        Хэрэв админ шинэ сургалт нэмэх бол эхлээд тухайн сургалтыг хөтөлбөр
        хичээлүүд хэсэгт шинээр оруулах шаардлагатай болно. Шинэ хөтөлбөр хичээл
        нэмэх үедээ дараах зааврын дагуу хийнэ.
      </p>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Сургалтын төв хуудсын хөтөлбөр хичээлүүд хэсгийг сонгоно.
          </h2>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">2</span>
          </div>
          <h2 className="text-lg font-medium text-gray-800">
            Сургалтын төв хуудсын хөтөлбөр хичээлүүд хэсгийг сонгоно.
          </h2>
        </div>
      </div>

      <div className="py-4">
        <Image
          className="w-full h-[400px]"
          src="/surgalt2.png"
          width={10000}
          height={10000}
          alt="Picture2"
        />
      </div>

      <p className="text-lg py-5">
        Нэмэх хэсэгт дарсны дараа дэлгэц дараах байдлаар харагдана. /ТМС/
      </p>

      <div className="hero ">
        <div className="hero-content w-full flex-col lg:flex-row">
          <Image
            src="/hutulbur.png"
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
                  Хөтөлбөр хичээлийн нэрийг оруулана.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээллийн нийт судлах цагыг оруулана.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээллийн хөтөлбрийн танилцуулгаа оруулана.
                </h2>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">
                  Хичээл заах багшийг сонгоно.
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
    </div>
  );
}

export default Surgalttow;
