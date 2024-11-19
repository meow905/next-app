import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import usb from "./assets/img/new_icon1.png";
import shirt from "./assets/img/new_icon2.png";
import usbPicture from "./assets/img/new_icon3.png";

export default function Items2() {
  return (
    <div className="relative">
      <div className="mb-52">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] px-10 flex justify-between pt-4">
          <div className="pt-16">
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
            <h2 className="text-end text-[200px] font-serif font-semibold text-white">
              3
            </h2>
          </div>
          <Image src={usbPicture} alt="pencils" className="px-6"></Image>
          <div className="self-end relative pl-5">
            <ul className="flex flex-col items-end  -translate-y-2 ">
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
              <Image src={shirt} alt="calender"></Image>
              <h2 className="uppercase font-bold pb-6">
                футболки<sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[24rem] w-[400px] ">
              <ul className="text-[#171717] leading-8 pl-24">
                <li>Детские футболки</li>
                <li>Женские футболки</li>
                <li>Мужские футболки</li>
                <li>Промо футболки</li>
                <li>Футболки поло</li>
              </ul>
              <h2 className="text-[200px] font-serif font-semibold text-white -translate-x-1 -translate-y-8">
                4
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
