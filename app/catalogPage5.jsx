import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import mug from "./assets/img/free-icon-coffee-mug-7070038 2.png";
import plug from "./assets/img/free-icon-plug-502947 2.png";
import temperature from "./assets/img/Rectangle 188.png";

export default function Items5() {
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
            <Image src={mug} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ручки <sup className="ml-2 text-[#FF6600]">300</sup> <br />и
              карандаши
            </h2>
            <ul className="text-[#17171766] leading-8 w-52 relative">
              <li>Аксессуары для вина и других напитков</li>
              <li>Аксессуары для чая и кофе</li>
              <li>Бокалы и стаканы</li>
              <li>Бутылки для воды</li>
              <li>Кофейные пары</li>
              <li>Кружки</li>
              <li>Кувшины и графины</li>
              <li>Ланч-боксы, контейнеры, термосы для еды</li>
              <li>Наборы с посудой</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute bottom-12 left-28 -z-10">
                9
              </h2>
            </ul>
          </div>
          <Image
            src={temperature}
            alt="pictuteOfPencils"
            className="pl-6 pr-2"
          ></Image>
          <div className="pl-5 px-52  text-nowrap">
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
              <Image src={plug} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                электроника <sup className="ml-2 text-[#FF6600]">300</sup>
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] w-[400px] relative -z-20">
              <ul className="text-[#171717] leading-8  pl-24 text-wrap">
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

                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 left-0 -z-10">
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
