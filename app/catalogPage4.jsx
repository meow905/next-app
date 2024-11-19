import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import ballpoint from "./assets/img/free-icon-ballpoint-4042177.png";
import plug from "./assets/img/free-icon-plug-502947 2.png";
import lotsOfPencils from "./assets/img/Rectangle 127.png";

export default function Items4() {
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
            <Image src={ballpoint} alt="ballpoint"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ручки <sup className="ml-2 text-[#FF6600]">300</sup> <br />и
              карандаши
            </h2>
            <ul className="text-[#17171766] leading-8 w-52 relative">
              <li>Бумажные и эко ручки с логотипом</li>
              <li>Карандаши с логотипом</li>
              <li>Маркеры и текстовыделители</li>
              <li>Металлические ручки с логотипом</li>
              <li>Наборы с ручками под логотип</li>
              <li>Пластиковые ручки с логотипом</li>
              <li>Ручки-роллеры</li>
              <li>Ручки-стилусы</li>
              <li>Футляры для ручек</li>
              <li>Эко ручки</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute bottom-12 left-28 -z-10">
                7
              </h2>
            </ul>
          </div>
          <Image
            src={lotsOfPencils}
            alt="pictuteOfPencils"
            className="pl-6 pr-2"
          ></Image>
          <div className="pl-5 relative px-52  text-nowrap">
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
            <div className="bg-[#D9D9D966] h-[24rem] w-[400px] relative -z-20">
              <ul className="text-[#171717] leading-8  pl-24 text-wrap px-8">
                <li>USB хабы, переходники, кабели</li>
                <li>Аксессуары для ПК</li>
                <li>Внешние аккумуляторы</li>
                <li>Зарядные устройства и адаптеры</li>
                <li>Камеры и аксессуары для съемки</li>
                <li>Компьютерные и мобильные аксессуары</li>
                <li>Наборы с внешними аккумуляторами</li>
                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 left-0 -z-10">
                  8
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
