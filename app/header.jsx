import img1 from "./assets/img/Лого_оарнжевое 1.png";
import img7 from "./assets/img/Group.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
            <Image src={img7} className="lg:hidden block" alt="image7"></Image>
            <li>+372 668 26 60</li>
            <li className="lg:block hidden">bigmaillong@mail.ru </li>
          </ul>
        </nav>
        <p className="text-[#17171766] text-[16px] opacity-[80%] pt-[40px] lg:block hidden">
          <Link
            href="/main"
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
    </>
  );
}
