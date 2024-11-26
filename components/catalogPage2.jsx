import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import usb from "../app/assets/img/new_icon1.png";
import shirt from "../app/assets/img/new_icon2.png";
import usbPicture from "../app/assets/img/new_icon3.png";
import Swiper from "./swipe/swipe";

export default function Items2() {
  return (
    <div className="relative">
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute lg:-top-40 top-0 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] pl-0 flex justify-between lg:pt-4 pt-2 lg:flex-row flex-col">
          <div className="lg:pt-16 pt-0 pl-10 lg:static relative lg:pb-0 pb-20">
            <Image src={usb} alt="usb"></Image>
            <h2 className="uppercase font-bold mb-5">
              флешки <sup className="ml-2 text-[#FF6600]">300</sup>
            </h2>
            <ul className="text-[#17171766] leading-8 text-nowrap">
              <li>Металлические флешки</li>
              <li>Наборы с флешками</li>
              <li>Пластиковые флешки</li>
              <li>Стеклянные флешки</li>
              <li>Упаковка для флешек</li>
              <li>Флешки из ПВХ</li>
              <li>Эко флешки</li>
            </ul>
            <h2 className="text-end text-[200px] font-serif font-semibold text-white lg:static absolute bottom-10 right-0 -z-10">
              3
            </h2>
          </div>
          <Image
            src={usbPicture}
            alt="pencils"
            className="px-6 lg:block hidden"
          ></Image>

          <div className="lg:pl-5 pl-0 relative text-nowrap flex flex-col order-1">
            <Swiper />

            <div className="lg:pl-24 pl-10 ">
              <Image src={shirt} alt="sheets"></Image>
              <h2 className="uppercase font-bold mb-4">
                футболки<sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
              </h2>
            </div>
            <div className="bg-[#D9D9D966] lg:h-[24rem] h-[22rem] lg:w-[400px] w-full">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 relative ">
                <li>Детские футболки</li>
                <li>Женские футболки</li>
                <li>Мужские футболки</li>
                <li>Промо футболки</li>
                <li>Футболки поло</li>
              </ul>
              <h2 className="text-[200px] font-serif font-semibold text-white -translate-x-2 absolute -bottom-11 lg:left-6 right-0">
                4
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
