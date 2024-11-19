import Image from "next/image";
import img1 from "./assets/img/Лого_оарнжевое 1.png";
import img2 from "./assets/img/130 1.png";
import img3 from "./assets/img/image 73.png";
import img4 from "./assets/img/image 71.png";
import img5 from "./assets/img/image 72.png";
import img6 from "./assets/img/Rectangle 177.png";
import img7 from "./assets/img/Group.png";
import Link from "next/link";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="overflow-hidden">
        <main className="lg:pl-[161px] pl-10 flex flex-col-reverse lg:flex-row justify-between relative">
          <article>
            <h1 className="lg:pt-24 pt-5 pr-10 text-2xl font-bold uppercase">
              Майки с нанесением <br />
              логотипа
            </h1>
            <p className="pt-[16px] text-[14px] xl:w-full md:w-96 max-w-[400px] xl:pr-0 pr-6">
              Равным образом, постоянное информационно-пропагандистское
              обеспечение нашей деятельности не даёт нам иного выбора, кроме
              определения приоретизации разума над эмоциями. Безусловно,
              убеждённость некоторых оппонентов однозначно фиксирует
              необходимость системы обучения кадров, соответствующей насущным
              потребностям. Являясь всего лишь частью общей картины,
              непосредственные участники технического прогресса, инициированные
              исключительно синтетически, призваны к ответу.
            </p>
          </article>
          <section className="relative lg:block flex flex-col items-end">
            <div className="bg-[#F08F35] w-[200px] lg:w-[900px] h-[500px] block lg:absolute -top-12 -right-80 -z-10">
              <Image
                src={img2}
                className="relative -left-40 lg:top-6 -top-2 w-[500px] lg:block hidden"
                alt="photo-2"
              ></Image>
            </div>
            <Image
              src={img2}
              className="absolute right-0 top-16 w-[350px] lg:hidden block"
              alt="photo-2"
            ></Image>
            <Image
              src={img1}
              priority
              alt="photo"
              className="pr-14 lg:hidden block absolute top-36 left-0 w-64"
            />
            <p className="text-[#17171766] text-[16px] opacity-[80%] pt-[40px] lg:hidden flex self-start">
              <span className="hover:bg-[#FF6600] hover:text-white px-2 rounded-full">
                Главная
              </span>{" "}
              /{" "}
              <span className="hover:bg-[#FF6600] hover:text-white px-2 rounded-full">
                <Link href={"/catalog"}>Каталог</Link>
              </span>{" "}
              /{" "}
              <span className="hover:bg-[#FF6600] hover:text-white px-2 rounded-full">
                Под каталог
              </span>{" "}
              /{" "}
              <span className="hover:bg-[#FF6600] hover:text-white px-2 rounded-full">
                Товар дня
              </span>
            </p>
          </section>
        </main>
        <footer className="pt-40 pb-2 lg:mb-10 mb-4 border-b-[1px] border-solid border-[#171717]">
          <ul className="flex justify-center items-center gap-4 flex-wrap lg:gap-11 text-[#17171766] px-3">
            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:block hidden lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Смотреть все
            </li>
            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Детские
            </li>
            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Мужские
            </li>
            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Женские
            </li>

            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Промо
            </li>
            <li className="lg:hover:bg-[#FF6600] rounded-2xl lg:hover:text-white hover:text-[#FF6600] py-2 lg:px-5 text-nowrap cursor-pointer">
              Поло
            </li>
          </ul>
          {/* <span className="lg:flex hidden">
            <svg
              className="border-[1px] border-transparent rounded-full hover:border-[#FF6600]"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
            <svg
              className="border-[1px] border-transparent rounded-full hover:border-[#FF6600]"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </span> */}
        </footer>
        <p className="lg:hover:bg-[#FF6600] rounded-2xl lg:hidden block text-center lg:hover:text-white hover:text-[#FF6600] pb-4 lg:px-5 text-nowrap cursor-pointer">
          Смотреть все
        </p>
      </div>
      <section className="pb-20 overflow-x-hidden">
        <ul className="flex lg:justify-between lg:gap-0 gap-4 justify-center lg:px-40 border-b-[1px] border-[#FF6600] lg:mb-5 lg:py-6 p-2 lg:bg-[#fff] bg-[#D9D9D938]">
          <li className="flex items-end gap-1 lg:border-none border-r-2 border-solid border-black lg:pr-0 pr-5">
            Фильтры
            <span>
              <svg
                className="border-[1px] border-transparent rounded-full hover:border-[#FF6600]"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </span>
          </li>
          <li className="uppercase font-bold lg:block hidden">Футболки</li>
          <li className="flex items-center gap-1">
            Сортировка
            <span>
              <svg
                className="border-[1px] border-transparent rounded-full hover:border-[#FF6600] rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </span>
          </li>
        </ul>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className="cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className="cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className="cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>
        <div className="lg:px-24 px-10 flex justify-center lg:justify-start lg:gap-24 gap-16 py-16 text-nowrap flex-wrap lg:flex-nowrap">
          <div className="relative">
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
            <span className="cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
            <Image src={img4} alt="photo4" />
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
          <div className="relative">
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
            <span className=" cursor-pointer hover:scale-75 transition absolute bg-white -top-5 -right-5 text-4xl border-2 w-10 h-10 flex justify-center items-center text-[#171717] border-solid border-[#171717] rounded-full">
              +
            </span>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-5 mt-16 border-b-[1px] border-solid border-black pb-24">
          <button className="border-[#FF6600] border-2 py-3 px-12 text-[#FF6600] hover:text-[#fff] hover:bg-[#FF6600]">
            Показать еще
          </button>
          <p className="flex items-center gap-4">
            <svg
              className="border-[1px] border-transparent rounded-full hover:border-[#FF6600] rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
            1 2 3 4....10
            <svg
              className="border-[1px] border-transparent rounded-full hover:border-[#FF6600]"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </p>
        </footer>
        <p className="text-center text-[14px] py-6">
          © 2022 “Promo World”. Все права защищены. Политика конфиденциальности
        </p>
      </section>
    </>
  );
}
