import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import backpack from "./assets/img/free-icon-backpack-495105.png";
import bagPicture from "./assets/img/bag.png";
import treeChris from "./assets/img/free-icon-christmas-tree-3701408.png";

export default function Items6() {
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
            <Image src={backpack} alt="mug"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              сумки и <sup className="ml-2 text-[#FF6600]">300</sup> <br />
              рюкзаки
            </h2>
            <ul className="text-[#17171766] leading-8 w-52 relative">
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
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute bottom-0 left-20 -z-10">
                11
              </h2>
            </ul>
          </div>
          <Image
            src={bagPicture}
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
                Новогодние <sup className="ml-2 text-[#FF6600]">300</sup> <br />
                подарки
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[26rem] w-[400px] relative -z-20">
              <ul className="text-[#171717] leading-8  pl-24 text-wrap  px-8">
                <li>Аксессуары и украшения для офиса к новому году</li>
                <li>Елочные шары</li>
                <li>Новогодние елочные игрушки</li>
                <li>Новогодние интерьерные украшения</li>
                <li>Новогодние подушки и пледы</li>
                <li>Новогодние свечи и подсвечники</li>
                <li>Новогодний стол</li>
                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 left-0 -z-10">
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
