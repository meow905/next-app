import circle from "../app/assets/img/Ellipse.png";
import Image from "next/image";
import Link from "next/link";
import calender from "../app/assets/img/free-icon-calendar-6798200.png";
import pencils from "../app/assets/img/Rectangle 123.png";
import clozet from "../app/assets/img/free-icon-hanger-4460328.png";
import imageLogo from "../app/assets/img/Лого_оарнжевое 1.png";
import Swiper from "./swipe/swipe";

export default function Items() {
  return (
    <>
      <div className="lg:mb-52 mb-14">
        <Image
          src={circle}
          alt="Circle"
          className="absolute top-0 left-0 -z-10"
        ></Image>

        <div className="lg:px-[161px] px-0 flex justify-between pt-4 lg:flex-row flex-col">
          <p className="text-[#17171766] text-[16px] opacity-[80%] pt-[40px] lg:hidden flex flex-wrap self-start pl-8">
            <Link href="/main" className="hover:text-[#FF6600] px-2">
              Главная
            </Link>

            <Link href={"/catalog"} className="hover:text-[#FF6600] px-2">
              Каталог
            </Link>

            <Link
              href={"/dopCatalog"}
              className="hover:text-[#FF6600] px-2 text-nowrap"
            >
              Под каталог
            </Link>

            <Link
              href={"/ProductOfTheDay"}
              className="hover:text-[#FF6600] px-2 text-nowrap"
            >
              Товар дня
            </Link>
          </p>
          <div className="pt-16 lg:block flex flex-col lg:flex-row lg:pl-0 pl-10 lg:static relative lg:pb-0 pb-20">
            <Image src={calender} alt="calender"></Image>
            <h2 className="uppercase font-bold mb-5">
              Для офиса <sup className="ml-2 text-[#FF6600]">300</sup>
            </h2>

            <ul className="text-[#17171766] leading-8 text-nowrap pr-2">
              <li>Визитницы </li>
              <li>Календари</li>
              <li>Канцелярия, канцтовары</li>
              <li>Настольные наборы</li>
              <li>Папки, портфели</li>
              <li>Чехлы для карт</li>
            </ul>
            <h2 className="text-end text-[200px] font-serif font-semibold text-white lg:static absolute bottom-0 right-0 ">
              1
            </h2>
          </div>
          <div className="-order-1 lg:order-1 flex lg:block justify-between">
            <Image
              src={imageLogo}
              className="block lg:hidden w-38 h-16 pl-10 mr-2"
            ></Image>
            <Image
              src={pencils}
              alt="pencils"
              className=" w-56 h-72 lg:w-auto lg:h-auto"
            ></Image>
          </div>

          <div className="lg:pl-5 pl-0 relative text-nowrap flex flex-col order-1">
            <Swiper />

            <div className="lg:pl-24 pl-10 ">
              <Image src={clozet} alt="sheets"></Image>
              <h2 className="uppercase font-bold mb-4">
                Одежда и <sup className="ml-2 text-[#FF6600]">300</sup> <br />{" "}
                головные уборы{" "}
              </h2>
            </div>
            <div className="bg-[#D9D9D966] h-[18rem] lg:w-[400px] w-full -z-20">
              <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 relative z-10 ">
                <li>Ветровки </li>
                <li>Вязаные комплекты</li>
                <li>Дождевики</li>
                <li>Жилеты</li>
                <li>Кепки и бейсболки</li>
                <li>Офисные рубашки</li>
                <li>Панамы, шляпы </li>
                <li>Платки, галстуки и запонки</li>
              </ul>
              <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute lg:-bottom-14 -bottom-20 lg:left-4 right-0 -z-10">
                2
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
