"use client";
import img1 from "./assets/img/Лого_оарнжевое 1.png";
import img7 from "./assets/img/Group.png";
import Link from "next/link";
import Image from "next/image";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="py-[20px] lg:px-[161px] px-10 text-[18px] font-normal mb-12 lg:m-0">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={img1}
              priority
              alt="photo"
              className="pr-14 lg:block hidden"
            />
            <ul className="lg:flex hidden items-center gap-4">
              <li className="hover:text-[#FF6600] cursor-pointer">
                Отправить запрос
              </li>
              <li className="hover:text-[#FF6600] cursor-pointer">
                Скачать презентацию
              </li>
            </ul>
          </div>
          <ul className="text-end flex w-full justify-between lg:block">
            <button onClick={() => setIsOpen(true)}>
              <Image
                src={img7}
                className="lg:hidden block"
                alt="image7"
              ></Image>
            </button>
            <li>+372 668 26 60</li>
            <li className="lg:block hidden">bigmaillong@mail.ru </li>
          </ul>
        </nav>
        <p className="text-[#17171766] text-[16px] opacity-[80%] pt-[40px] lg:block hidden">
          <Link
            href="/"
            className="hover:bg-[#FF6600] hover:text-white px-4 py-2 rounded-full"
          >
            Главная
          </Link>

          <Link
            href={"/catalog"}
            className="hover:bg-[#FF6600] hover:text-white px-4 py-2 rounded-full"
          >
            Каталог
          </Link>

          <Link
            href={"/dopCatalog"}
            className="hover:bg-[#FF6600] hover:text-white px-4 py-2 rounded-full"
          >
            Под каталог
          </Link>

          <Link
            href={"/ProductOfTheDay"}
            className="hover:bg-[#FF6600] hover:text-white px-4 py-2 rounded-full"
          >
            Товар дня
          </Link>
        </p>
      </header>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white px-20 py-14 rounded-xl shadow-xl">
            <div className="flex">
              <p className="text-[#17171766] text-[16px] opacity-[80%] lg:hidden flex flex-col flex-wrap self-start gap-4">
                <Link href={"/"} className="hover:text-[#FF6600]">
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
                <button
                  className="hover:bg-slate-500 py-2 px-4 rounded-lg hover:text-white transition-all mt-5"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </p>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
