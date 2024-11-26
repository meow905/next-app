import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import mug from "../app/assets/img/free-icon-coffee-mug-7070038 2.png";
import plug from "../app/assets/img/free-icon-plug-502947 2.png";
import temperature from "../app/assets/img/Rectangle 188.png";
import Swiper from "./swipe/swipe";

export default function Items5() {
  return (
    <div className="relative">
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-50"
        ></Image>
        <div className="lg:px-[161px] px-0 pt-4 flex flex-col lg:flex-row">
          <div className="pt-16 lg:pb-0 pb-20 lg:pl-0 pl-10">
            <Image src={mug} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ручки <sup className="ml-2 text-[#FF6600]">300</sup> <br />и
              карандаши
            </h2>
            <ul className="text-[#17171766] leading-8 lg:w-52 w-full relative">
              <li>Аксессуары для вина и других напитков</li>
              <li>Аксессуары для чая и кофе</li>
              <li>Бокалы и стаканы</li>
              <li>Бутылки для воды</li>
              <li>Кофейные пары</li>
              <li>Кружки</li>
              <li>Кувшины и графины</li>
              <li>Ланч-боксы, контейнеры, термосы для еды</li>
              <li>Наборы с посудой</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute lg:bottom-12 bottom-20 lg:left-28 right-0 -z-10">
                9
              </h2>
            </ul>
          </div>
          <Image
            src={temperature}
            alt="pictuteOfPencils"
            className="pl-6 pr-2 lg:block hidden"
          ></Image>
          <div className="lg:pl-5 pl-0  text-nowrap">
            <Swiper />
            <div className="lg:pl-24 pl-10">
              <Image src={plug} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                электроника <sup className="ml-2 text-[#FF6600]">300</sup>
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] lg:w-[400px] w-full relative z-50">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 text-wrap">
                <li>Вышивка</li>
                <li>Детские товары</li>
                <li>Для дома</li>
                <li>Для отдыха</li>
                <li>Для офиса</li>
                <li>Зонты</li>
                <li>Кожгалантерея</li>
                <li>Наборы с ежедневниками</li>
                <li>Наградная продукция</li>
                <li>Новогодние наборы</li>
                <li>Одежда и головные уборы</li>
                <li>Пледы</li>

                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 lg:left-0 right-0 -z-10">
                  10
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
