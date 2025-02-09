import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import gift from "../app/assets/img/free-icon-gift-2549608.png";
import giftBox from "../app/assets/img/Rectangle 160.png";
import Swiper from "./swipe/swipe";

export default function Items8() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between lg:px-[161px] px-0 ">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="flex gap-10 flex-col lg:flex-row pt-4">
          <div className="pt-16 lg:pb-0 pb-10 lg:pl-0 pl-10">
            <Image src={gift} alt="gift"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              подарочная <sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
              упаковка
              <br />
            </h2>
            <ul className="text-[#17171766] leading-8 lg:w-52 w-full relative">
              <li>Декор упаковки </li>
              <li>Жестяная упаковка</li>
              <li>Пластиковая упаковка</li>
              <li>Подарочные коробки</li>
              <li>Подарочные пакеты</li>
              <li>Подарочные пакеты и сумки</li>
              <h2 className="text-[200px] font-serif font-semibold text-white absolute lg:-bottom-16 bottom-20 lg:left-36 left-56 -z-10">
                15
              </h2>
            </ul>
          </div>
          <Image
            src={giftBox}
            alt="pictuteOfPencils"
            className="pl-6 pr-2 -translate-y-16 lg:block hidden"
          ></Image>
        </div>
        <div className="pl-5 translate-x-24 text-nowrap ">
          <Swiper />
        </div>
      </div>

      <h3 className="text-[14px] text-center px-12  text-white bg-[#FF6600] lg:hidden block py-12 rounded-tl-full rounded-tr-full">
        © 2022 “Promo World”. Все права защищены. Политика конфиденциальности
      </h3>
    </div>
  );
}
