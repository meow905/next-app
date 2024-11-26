import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import backpack from "../app/assets/img/free-icon-backpack-495105.png";
import bagPicture from "../app/assets/img/bag.png";
import treeChris from "../app/assets/img/free-icon-christmas-tree-3701408.png";
import Swiper from "./swipe/swipe";

export default function Items6() {
  return (
    <div className="relative">
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] px-0 pt-4 flex flex-col lg:flex-row">
          <div className="pt-16 lg:mb-0 mb-20 lg:pl-0 pl-10">
            <Image src={backpack} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              сумки и <sup className="ml-2 text-[#FF6600]">300</sup> <br />
              рюкзаки
            </h2>
            <ul className="text-[#17171766] leading-8 lg:w-52 w-full relative">
              <li>Дорожные органайзеры</li>
              <li>Дорожные сумки</li>
              <li>Несессеры</li>
              <li>Рюкзаки</li>
              <li>Спортивные сумки</li>
              <li>Сумки для документов</li>
              <li>Сумки для ноутбука</li>
              <li>Сумки-холодильники</li>
              <li>Чемоданы</li>
              <li>Чехлы для ноутбуков и планшетов</li>
              <li>Шоперы с логотипом</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute lg:bottom-0 bottom-16 lg:left-20 right-0 -z-10">
                11
              </h2>
            </ul>
          </div>
          <Image
            src={bagPicture}
            alt="pictuteOfPencils"
            className="pl-6 pr-2 lg:block hidden"
          ></Image>
          <div className="lg:pl-5 pl-0 text-nowrap">
            <Swiper />
            <div className="lg:pl-24 pl-10">
              <Image src={treeChris} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                Новогодние <sup className="ml-2 text-[#FF6600]">300</sup> <br />
                подарки
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] lg:w-[400px] w-full relative z-40">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 text-wrap  px-8">
                <li>Аксессуары и украшения для офиса к новому году</li>
                <li>Елочные шары</li>
                <li>Новогодние елочные игрушки</li>
                <li>Новогодние интерьерные украшения</li>
                <li>Новогодние подушки и пледы</li>
                <li>Новогодние свечи и подсвечники</li>
                <li>Новогодний стол</li>
                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 lg:left-0 right-0 -z-10">
                  12
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
