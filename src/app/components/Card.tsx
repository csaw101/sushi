function Card({
  img,
  header,
  text,
  price,
}: {
  img: string;
  header: string;
  text: string;
  price: number;
}) {
  return (
    <div className="cursor-pointer transition ease-in delay-50 duration-50 hover:scale-105 w-full h-full bg-white p-4 m-4 space-y-8">
      <div className="aspect-square">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-full m-auto"
        />
      </div>
      <div className="text-left space-y-8">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-extrabold">
          {header}
        </div>
        <div className="text-lg lg:text-xl xl:text-2xl">{text}</div>
        <div className="text-lg lg:text-xl xl:text-2xl text-[#f872a7] font-extrabold">
          {price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Card;
