import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import homePicture from "./assets/img/free-icon-home-1828864.png";
import teaCup from "./assets/img/Rectangle 150.png";
import treeChris from "./assets/img/free-icon-christmas-tree-3701408.png";

export default function Items7() {
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
            <Image src={homePicture} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              для дома <sup className="ml-2 text-[#FF6600]">300</sup> <br />
            </h2>
            <ul className="text-[#17171766] leading-8 w-52 relative">
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
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute -bottom-0 left-16 -z-10">
                13
              </h2>
            </ul>
          </div>
          <Image
            src={teaCup}
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
              <Image src={treeChris} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                зонты <sup className="ml-2 text-[#FF6600]">300</sup> <br />
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] w-[400px] relative -z-20">
              <ul className="text-[#171717] leading-8  pl-24 text-wrap  px-8">
                <li>Зонты, трости </li>
                <li>Необычные и оригинальные зонты</li>
                <li>Складные зонты</li>

                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-24 left-0 -z-10">
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
