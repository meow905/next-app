import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import noteBook from "../app/assets/img/notebook.png";
import sheets from "../app/assets/img/sheets.png";
import pictureOfBook from "../app/assets/img/pictureOfBook.png";
import Swiper from "./swipe/swipe";

export default function Items3() {
  return (
    <div className="relative">
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10 lg:block hidden"
        ></Image>
        <div className="lg:px-[161px]  pt-4 flex flex-col lg:flex-row">
          <div className="pt-16 lg:pb-0 pb-20 lg:pl-0 pl-10">
            <Image src={noteBook} alt="notebook"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ежедневники <sup className="ml-2 text-[#FF6600]">300</sup>
            </h2>
            <ul className="text-[#17171766] leading-8 relative">
              <li>Бизнес наборы</li>
              <li>Блокноты с логотипом</li>
              <li>Датированные ежедневники</li>
              <li>Ежедневники из натуральной кожи</li>
              <li>Еженедельники</li>
              <li>Планинги</li>
              <li>Полудатированные</li>
              <li>Упаковка для ежедневников</li>
              <h2 className="translate-x-9 text-end text-[200px] font-serif font-semibold text-white lg:static absolute bottom-24 right-8 -z-10">
                5
              </h2>
            </ul>
          </div>
          <Image
            src={pictureOfBook}
            alt="pictureOfBook"
            className="px-6 lg:block hidden"
          ></Image>
          <div className="lg:pl-5 pl-0 relative text-nowrap">
            <Swiper />
            <div className="lg:pl-24 pl-10">
              <Image src={sheets} alt="sheets"></Image>
              <h2 className="uppercase font-bold mb-4">
                пледы <sup className="ml-2 text-[#FF6600]">300</sup>
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[24rem] lg:w-[400px] w-full">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 ">
                <li>Пледы из натуральной шерсти</li>
                <li>Пледы вафельного полотна</li>
                <li>Подушки и наволочки</li>
              </ul>
              <h2 className="text-[200px] font-serif font-semibold text-white mt-16 -translate-x-2 lg:text-start text-end">
                6
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
