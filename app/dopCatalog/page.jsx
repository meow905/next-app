import Header from "../header";
import Image from "next/image";
import hande1 from "@/app/assets/img/hande1.png";
import hande2 from "@/app/assets/img/hande2.png";
import hande3 from "@/app/assets/img/hande3.png";

export default function DopCatalog() {
  return (
    <>
      <div>
        <Header></Header>
        <section className="flex gap-10">
          <div className="self-center relative -right-2 text-nowrap">
            <Image src={hande1} className="inline-block" />
            <Image src={hande2} className="inline-block ml-5" />
          </div>
          <div>
            <Image src={hande3} />
          </div>
          <article className="w-[700px] self-center">
            <p className="text-[#FF6600]">В наличии</p>
            <h2 className="text-3xl font-bold">Деревянная модель HAND</h2>
            <h3 className="border-b-[1px] border-[#171717] border-solid pb-4">
              Артикул: RFG45366H
            </h3>
            <p className="pt-4">Описание</p>
            <p className="text-[17px] pb-4">
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
            <ul className="flex justify-between pt-5 items-center">
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
      </div>
    </>
  );
}
