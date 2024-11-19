import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import gift from "./assets/img/free-icon-gift-2549608.png";
import giftBox from "./assets/img/Rectangle 160.png";

export default function Items8() {
  return (
    <div className="relative">
      <div className="mb-52 flex justify-between lg:px-[161px] px-10">
        <Image
          src={circle}
          alt="Circle"
          className="absolute -top-40 left-0 -z-10"
        ></Image>
        <div className="flex gap-10">
          <div className="pt-16">
            <Image src={gift} alt="gift"></Image>
            <h2 className="uppercase font-bold mb-5 text-nowrap">
              подарочная <sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
              упаковка
              <br />
            </h2>
            <ul className="text-[#17171766] leading-8 w-52 relative">
              <li>Декор упаковки </li>
              <li>Жестяная упаковка</li>
              <li>Пластиковая упаковка</li>
              <li>Подарочные коробки</li>
              <li>Подарочные пакеты</li>
              <li>Подарочные пакеты и сумки</li>
              <h2 className="text-end text-[200px] font-serif font-semibold text-white absolute -bottom-24 left-36 -z-10">
                15
              </h2>
            </ul>
          </div>
          <Image
            src={giftBox}
            alt="pictuteOfPencils"
            className="pl-6 pr-2 -translate-y-16"
          ></Image>
        </div>
        <div className="pl-5 translate-x-24 text-nowrap ">
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
        </div>
      </div>
    </div>
  );
}
