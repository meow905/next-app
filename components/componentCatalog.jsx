import Link from "next/link";
import imageLogo from "../app/assets/img/Лого_оарнжевое 1.png";
import Swiper from "./swipe/swipe";
import { catalogArray } from "./catalogArray";
import React from "react";
import Image from "next/image";

export default function ComponentCatalog1() {
  return (
    <div className="lg:px-[161px] px-0 flex justify-between pt-4 lg:flex-row flex-col">
      <p className="text-[#17171766] text-[16px] opacity-[80%] pt-[40px] lg:hidden flex flex-wrap self-start pl-8">
        <Link href={"/home"} className="hover:text-[#FF6600] px-2">
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
        {catalogArray.map((array, index) => {
            return (
                <React.Fragment key={index}>
              <div className="pt-16 lg:block flex flex-col lg:flex-row lg:pl-0 pl-10 lg:static relative lg:pb-0 pb-20">
                <Image src={array.calenderItem} alt="calender"></Image>
                <h2 className="uppercase font-bold mb-5">
                  {array.forOffice}{" "}
                  <sup className="ml-2 text-[#FF6600]">{array.numberItem}</sup>
                </h2>

                <ul className="text-[#17171766] leading-8 text-nowrap pr-2">
                  {array.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <h2 className="text-end text-[200px] font-serif font-semibold text-white lg:static absolute bottom-0 right-0 ">
                  {array.topNumber}
                </h2>
              </div>
              <div className="-order-1 lg:order-1 flex lg:block justify-between">
                <Image
                  src={imageLogo}
                  className="block lg:hidden w-38 h-16 pl-10 mr-2"
                ></Image>
                <Image
                  src={array.image}
                  alt="pencils"
                  className=" w-56 h-72 lg:w-auto lg:h-auto"
                ></Image>
              </div>

              <div className="lg:pl-5 pl-0 relative text-nowrap flex flex-col order-1">
                <Swiper />

                <div className="lg:pl-24 pl-10 ">
                  <Image src={array.clozetImg} alt="sheets"></Image>
                  <h2 className="uppercase font-bold mb-4">
                    {array.stuff1}{" "}
                    <sup className="ml-2 text-[#FF6600]">
                      {array.numberItem}
                    </sup>{" "}
                    <br /> {array.stuff2}{" "}
                  </h2>
                </div>
                <div className="bg-[#D9D9D966] h-[18rem] lg:w-[400px] w-full -z-20">
                  <ul className="text-[#171717] leading-8  lg:pl-24 pl-10 relative z-10 ">
                    {array.stuffs.map((stuff, index) => {
                      return <li key={index}>{stuff}</li>;
                    })}
                  </ul>
                  <h2 className="text-[200px] font-serif font-semibold text-white  -translate-x-2 absolute lg:-bottom-14 -bottom-20 lg:left-4 right-0 -z-10">
                    {array.bottomNuber}
                  </h2>
                </div>
   
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
