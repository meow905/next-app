import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import homePicture from "../app/assets/img/free-icon-home-1828864.png";
import teaCup from "../app/assets/img/Rectangle 150.png";
import treeChris from "../app/assets/img/free-icon-christmas-tree-3701408.png";
import Swiper from "./swipe/swipe";

export default function Items7() {
  return (
    <div className="relative">
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] px-0 pt-4 flex flex-col lg:flex-row">
          <div className="pt-16 lg:pb-0 pb-20 lg:pl-0 pl-10">
            <Image src={homePicture} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              для дома <sup className="ml-2 text-[#FF6600]">300</sup> <br />
            </h2>
            <ul className="text-[#17171766] leading-8 lg:w-52 w-full relative">
              <li>Декоративные свечи и подсвечники подарки</li>
              <li>Игры, головоломки</li>
              <li>Инструменты</li>
              <li>Интерьерные подарки</li>
              <li>Кухонные принадлежности</li>
              <li>Лампы и светильники</li>
              <li>Мягкие игрушки</li>
              <li>Полотенца</li>
              <li>Продуктовые</li>
              <li>Разделочные и сервировочные доски</li>
              <li> Фартуки и прихватки</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute lg:bottom-0 bottom-20 lg:left-16 right-0 -z-10">
                13
              </h2>
            </ul>
          </div>
          <Image
            src={teaCup}
            alt="teaCup"
            className="pl-6 pr-2 lg:block hidden"
          ></Image>
          <div className="lg:pl-5 pl-0   text-nowrap">
            <Swiper />
            <div className="lg:pl-24 pl-10">
              <Image src={treeChris} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                зонты <sup className="ml-2 text-[#FF6600]">300</sup> <br />
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] lg:w-[400px] w-full relative z-40">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 text-wrap  px-8">
                <li>Зонты, трости </li>
                <li>Необычные и оригинальные зонты</li>
                <li>Складные зонты</li>

                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-24 lg:left-0 right-0 -z-10">
                  14
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
