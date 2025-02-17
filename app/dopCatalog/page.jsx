"use client"
import Header from "../header";
import Image from "next/image";
import hande1 from "@/app/assets/img/hande1.png";
import hande2 from "@/app/assets/img/hande2.png";
import hande3 from "@/app/assets/img/hande3.png";
import img3 from "../assets/img/image 73.png";
import img4 from "../assets/img/image 71.png";
import img5 from "../assets/img/image 72.png";
import img6 from "../assets/img/Rectangle 177.png";
import logoimg from "@/app/assets/img/Лого_оарнжевое 1.png";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Autoplay, EffectCube, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function DopCatalog() {
  return (
    <>
      <div className="overflow-hidden">
        <Header></Header>

        <section className="flex gap-10 lg:flex-row flex-col">
          <div className="flex lg:gap-10 gap-32 relative">
            <Image
              src={logoimg}
              className="absolute top-0 left-6 lg:hidden block"
              alt="logo"
            ></Image>
            <div className="lg:self-center self-end relative -right-2 text-nowrap lg:w-auto w-56">
              <Image src={hande1} alt="hande1" className="inline-block" />
              <Image
                src={hande2}
                alt="hande2"
                className="inline-block ml-5 scale-125 lg:scale-100"
              />
            </div>
            <div>
              <Image src={hande3} alt="hande3" />
            </div>
          </div>
          <article className="lg:w-[700px] max-w-[700px] self-center lg:pr-4 lg:pl-0 p-5">
            <p className="text-[#17171766] text-[16px] opacity-[80%] lg:hidden flex flex-wrap self-start pb-9 gap-4">
              <Link href={"/home"} className="hover:text-[#FF6600]">
                Главная
              </Link>

              <Link href={"/catalog"} className="hover:text-[#FF6600]">
                Каталог
              </Link>

              <Link
                href={"/dopCatalog"}
                className="hover:text-[#FF6600] text-nowrap"
              >
                Под каталог
              </Link>

              <Link
                href={"/ProductOfTheDay"}
                className="hover:text-[#FF6600] text-nowrap"
              >
                Товар дня
              </Link>
            </p>
            <p className="text-[#FF6600]">В наличии</p>
            <h2 className="lg:text-3xl text-2xl font-bold">
              Деревянная модель HAND
            </h2>
            <h3 className="border-b-[1px] border-[#171717] border-solid pb-4">
              Артикул: RFG45366H
            </h3>
            <p className="pt-4 text-[#171717] lg:text-xl text-lg">Описание</p>
            <p className="text-[17px] pb-4 text-[#000000c5] lg:text-lg text-base">
              Подставка из натурального дерева имитирует форму человеческой
              руки.
            </p>
            <p className="text-[#00000099]">
              Вращающийся шарниры обеспечивают подвижность и естественное
              вращение всех фаланг пальцев рук и сустава кисти. Такая модель
              может служить не только подставкой, но и универсальным атрибутом
              Вашего кабинета или дома Изготовлена из натурального дерева -
              массива березы. Medium – высота фигурки 25 см Логотип наносится
              методом выжигания.
            </p>
            <ul className="flex lg:justify-between justify-center lg:gap-0 gap-5 pt-5 items-center flex-wrap">
              <li className="text-3xl text-[#FF6600]">1 270 ₽</li>
              <li className="text-xl">- 10 +</li>
              <li>
                <button className="bg-[#FF6600] py-2 px-8 text-white">
                  В корзину
                </button>
              </li>
            </ul>
          </article>
        </section>
        <ul className="lg:flex justify-center hidden gap-2 pt-5 border-b-2 border-solid border-[#FF6600]">
          <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
          <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
          <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
          <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
          <li className="w-4 h-4 border-solid border-[#17171766] border-2 rounded-full mb-2 hover:bg-[#FF6600] cursor-pointer hover:border-none"></li>
        </ul>
        <section className="flex lg:pl-24 pl-5 pt-11 border-b-[1px] border-none border-[#171717] lg:border-solid pb-14 lg:flex-row flex-col">
          <div className="lg:self-center self-start">
            <h2 className="lg:text-3xl text-2xl uppercase font-bold pb-4">
              Еще товары <br /> этой категории
            </h2>
          </div>
          <div className="bg-[#E4E3E8B2] md:ml-10 ml-0 overflow-hidden shadow-2xl ">
            <div className="p-5 container">
              <Swiper
                modules={[Navigation, Pagination, A11y, Keyboard]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                keyboard={true}
              >
                <SwiperSlide className="p-5 flex flex-col">
                  <Image src={img4} alt="photo4" />
                  <h2 className="font-medium text-[15px] py-6">
                    Футболка «Новая классика. <br />
                    Freestyle», белая (S)
                  </h2>
                  <div className="flex items-center gap-9 text-[14px]">
                    <ul>
                      <li className="text-[rgb(255,102,0)]">В наличии</li>
                      <li className="text-[16px]">970 ₽</li>
                      <li className="pt-2">Минимальный заказ 10 шт</li>
                    </ul>
                    <span className="text-[18px]">- 10 +</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-5 flex flex-col">
                  <Image src={img5} alt="photo5" />
                  <h2 className="font-medium text-[15px] py-6">
                    Футболка «Новая классика. <br />
                    Freestyle», белая (S)
                  </h2>
                  <div className="flex items-center gap-9 text-[14px]">
                    <ul>
                      <li className="text-[#FF6600]">В наличии</li>
                      <li className="text-[16px]">970 ₽</li>
                      <li className="pt-2">Минимальный заказ 10 шт</li>
                    </ul>
                    <span className="text-[18px]">- 10 +</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-5 flex flex-col">
                  <Image src={img6} alt="photo6" />
                  <h2 className="font-medium text-[15px] py-6">
                    Футболка «Новая классика. <br />
                    Freestyle», белая (S)
                  </h2>
                  <div className="flex items-center gap-9 text-[14px]">
                    <ul>
                      <li className="text-[#FF6600]">В наличии</li>
                      <li className="text-[16px]">970 ₽</li>
                      <li className="pt-2">Минимальный заказ 10 шт</li>
                    </ul>
                    <span className="text-[18px]">- 10 +</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-5 flex flex-col">
                  <Image src={img6} alt="photo6" />
                  <h2 className="font-medium text-[15px] py-6">
                    Футболка «Новая классика. <br />
                    Freestyle», белая (S)
                  </h2>
                  <div className="flex items-center gap-9 text-[14px]">
                    <ul>
                      <li className="text-[#FF6600]">В наличии</li>
                      <li className="text-[16px]">970 ₽</li>
                      <li className="pt-2">Минимальный заказ 10 шт</li>
                    </ul>
                    <span className="text-[18px]">- 10 +</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-5  flex flex-col">
                  <Image src={img3} alt="photo3" />
                  <h2 className="font-medium text-[15px] py-6">
                    Футболка «Новая классика. <br />
                    Freestyle», белая (S)
                  </h2>
                  <div className="flex items-center gap-9 text-[14px]">
                    <ul>
                      <li className="text-[#FF6600]">В наличии</li>
                      <li className="text-[16px]">970 ₽</li>
                      <li className="pt-2">Минимальный заказ 10 шт</li>
                    </ul>
                    <span className="text-[18px]">- 10 +</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <p className="py-5 text-center bg-[#FF6600] lg:bg-transparent rounded-t-full px-6 text-[#fff] lg:text-black">
          © 2022 “Promo World”. Все права защищены. Политика конфиденциальности
        </p>
      </div>
    </>
  );
}
