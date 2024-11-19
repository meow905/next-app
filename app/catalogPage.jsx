import circle from "./assets/img/Ellipse.png";
import Image from "next/image";
import calender from "./assets/img/free-icon-calendar-6798200.png";
import pencils from "./assets/img/Rectangle 123.png";
import clozet from "./assets/img/free-icon-hanger-4460328.png";

export default function Items() {
  return (
    <>
      <div className="mb-52">
        <Image
          src={circle}
          alt="Circle"
          className="absolute top-0 left-0 -z-10"
        ></Image>
        <div className="lg:px-[161px] px-10 flex justify-between pt-4">
          <div className="pt-16">
            <Image src={calender} alt="calender"></Image>
            <h2 className="uppercase font-bold mb-5">
              Для офиса <sup className="ml-2 text-[#FF6600]">300</sup>
            </h2>
            <ul className="text-[#17171766] leading-8 text-nowrap">
              <li>Визитницы </li>
              <li>Календари</li>
              <li>Канцелярия, канцтовары</li>
              <li>Настольные наборы</li>
              <li>Папки, портфели</li>
              <li>Чехлы для карт</li>
            </ul>
            <h2 className="text-end text-[200px] font-serif font-semibold text-white ">
              1
            </h2>
          </div>
          <Image src={pencils} alt="pencils" className="pl-6"></Image>
          <div className="self-end relative pl-5">
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
              <Image src={clozet} alt="calender"></Image>
              <h2 className="uppercase font-bold pb-6">
                Одежда и <sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
                головные уборы{" "}
              </h2>
            </div>

            <div className="bg-[#D9D9D966] h-[24rem] w-[400px] relative z-20">
              <ul className="text-[#171717] leading-8 pl-24">
                <li>Ветровки </li>
                <li>Вязаные комплекты</li>
                <li>Дождевики</li>
                <li>Жилеты</li>
                <li>Кепки и бейсболки</li>
                <li>Офисные рубашки</li>
                <li>Панамы, шляпы </li>
                <li>Платки, галстуки и запонки</li>
                <li>Спортивная одежда </li>
                <li>Толстовки</li>
                <li>Шарфы</li>
                <h2 className="text-[200px] font-serif font-semibold text-white absolute bottom-14 -left-2 -z-10">
                  2
                </h2>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
