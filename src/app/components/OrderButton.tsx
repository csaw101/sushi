import { CgArrowLongRight } from 'react-icons/cg';

function OrderButton() {
  return (
    <div className="order-4 cursor-pointer transition ease-in delay-50 duration-50 hover:scale-105 bg-[#f872a7] w-fit px-6 py-2 lg:px-8 lg:py-3 xl:px-10 xl:py-5 rounded-[40px] text-white font-extrabold text-xl lg:text-2xl xl:text-3xl flex">
      <div className="m-auto pr-4">Order Now</div>
      <CgArrowLongRight size={45} />
    </div>
  );
}

export default OrderButton;
