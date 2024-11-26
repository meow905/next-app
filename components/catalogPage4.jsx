import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import ballpoint from "../app/assets/img/free-icon-ballpoint-4042177.png";
import plug from "../app/assets/img/free-icon-plug-502947 2.png";
import lotsOfPencils from "../app/assets/img/Rectangle 127.png";
import Swiper from "./swipe/swipe";

export default function Items4() {
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
            <Image src={ballpoint} alt="ballpoint"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              ручки <sup className="ml-2 text-[#FF6600]">300</sup> <br />и
              карандаши
            </h2>
            <ul className="text-[#17171766] leading-8 lg:w-52 w-full relative">
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
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute lg:bottom-12 bottom-24 lg:left-28 right-0 -z-10">
                7
              </h2>
            </ul>
          </div>
          <Image
            src={lotsOfPencils}
            alt="pictuteOfPencils"
            className="pl-6 pr-2 lg:block hidden"
          ></Image>
          <div className="lg:pl-5 pl-0 relative  text-nowrap">
            <Swiper />
            <div className="lg:pl-24 pl-10">
              <Image src={plug} alt="plug"></Image>
              <h2 className="uppercase font-bold mb-4">
                электроника <sup className="ml-2 text-[#FF6600]">300</sup>
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[24rem] lg:w-[400px] w-full relative -z-20">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 text-wrap px-8">
                <li>USB хабы, переходники, кабели</li>
                <li>Аксессуары для ПК</li>
                <li>Внешние аккумуляторы</li>
                <li>Зарядные устройства и адаптеры</li>
                <li>Камеры и аксессуары для съемки</li>
                <li>Компьютерные и мобильные аксессуары</li>
                <li>Наборы с внешними аккумуляторами</li>
                <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute bottom-14 lg:left-0 right-0 -z-10">
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
