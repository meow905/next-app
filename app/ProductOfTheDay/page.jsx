import Header from "../header";

export default function DopCatalog() {
  return (
    <>
      <div>
        <Header></Header>
        <article className="lg:px-[161px] px-10 pb-10">
          <p className="text-[#FF6600]">В наличии</p>
          <h1 className="text-2xl font-bold pb-4">
            Welcome Pack c зонтом, <br /> ежедневником, значком и ручкой
          </h1>
          <p className="text-xl">Артикул: RFG45366H</p>
          <p className="pt-11 pb-7 text-xl">Цвет</p>
          <ul className="flex gap-5 border-b-[#171717] border-solid border-[1px] pb-5 mb-5 border-transparent">
            <li className="p-2 border-2 border-transparent hover:border-[#656464] border-solid rounded-full">
              <li className="w-7 h-7 bg-red-700 rounded-full"></li>
            </li>
            <li className="p-2 border-2 border-transparent hover:border-[#656464] border-solid rounded-full">
              <li className="w-7 h-7 bg-green-600 rounded-full"></li>
            </li>

            <li className="p-2 border-2 border-transparent hover:border-[#656464] border-solid rounded-full">
              <li className="w-7 h-7 bg-purple-600 rounded-full"></li>
            </li>

            <li className="p-2 border-2 border-transparent hover:border-[#656464] border-solid rounded-full">
              <li className="w-7 h-7 bg-blue-600 rounded-full"></li>
            </li>

            <li className="p-2 border-2 border-transparent hover:border-[#656464] border-solid rounded-full">
              <li className="w-7 h-7 bg-black rounded-full"></li>
            </li>
          </ul>
          <p className="text-xl">Описание</p>
          <p className="mb-5">Изготавливается на заказ по Вашим макетам.</p>
          <p className="text-[#00000099] pb-8">
            В комплекте: <br /> <br />
            Недатированный ежедневник формата А5 с фирменной печатью и soft
            touch покрытием <br /> <br />
            Поставляется в фирменной коробке. Комплектуется шариковой ручкой с
            soft touch покрытием и логотипом <br /> <br /> Складной
            брендированный зонт в чехле <br /> <br /> Закатной значок
          </p>

          <p className="pb-8">
            Мы подберем качественные носители Вашего фирменного стиля в
            зависимости от <br /> бюджета, тиража и Вашей задачи, которую
            должная решать продукция <br /> *Цена указана при заказе тиража 200
            шт.
          </p>
          <ul className="flex justify-between items-center lg:flex-row flex-col">
            <li className="text-[#FF6600] text-3xl">1 548 ₽</li>
            <li className="flex items-center lg:gap-48 gap-5 flex-col lg:flex-row">
              <li className="pt-4 lg:pt-0">- 10 +</li>
              <li>
                <button className="bg-[#FF6600] text-white py-3 px-10">
                  В корзину
                </button>
              </li>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
