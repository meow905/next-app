import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import noteBook from "./assets/img/notebook.png";
import sheets from "./assets/img/sheets.png";
import pictureOfBook from "./assets/img/pictureOfBook.png";

export default function Items3() {
  return (
    <div className="relative">
      <div className="mb-52">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] px-10 pt-4 flex">
          <div className="pt-16">
            <Image src={noteBook} alt="notebook"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ежедневники <sup className="ml-2 text-[#FF6600]">300</sup>
            </h2>
            <ul className="text-[#17171766] leading-8">
              <li>Бизнес наборы</li>
              <li>Блокноты с логотипом</li>
              <li>Датированные ежедневники</li>
              <li>Ежедневники из натуральной кожи</li>
              <li>Еженедельники</li>
              <li>Планинги</li>
              <li>Полудатированные</li>
              <li>Упаковка для ежедневников</li>
              <h2 className="translate-x-9 text-end text-[200px] font-serif font-semibold text-white">
                5
              </h2>
            </ul>
          </div>
          <Image
            src={pictureOfBook}
            alt="pictureOfBook"
            className="px-6"
          ></Image>
          <div className="pl-5 relative text-nowrap">
            <ul className="flex flex-col items-end">
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
              <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
            </ul>
            <div className="pl-24">
              <Image src={sheets} alt="sheets"></Image>
              <h2 className="uppercase font-bold mb-4">
                пледы <sup className="ml-2 text-[#FF6600]">300</sup>
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[24rem] w-[400px]">
              <ul className="text-[#171717] leading-8  pl-24 px-8">
                <li>Пледы из натуральной шерсти</li>
                <li>Пледы вафельного полотна</li>
                <li>Подушки и наволочки</li>
              </ul>
              <h2 className="text-[200px] font-serif font-semibold text-white mt-16 -translate-x-2">
                6
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
