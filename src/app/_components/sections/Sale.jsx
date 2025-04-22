import React from "react";
import Image from "next/image";
const Sale = () => {
  return (
    <div className="text-center w-screen h-[450px] relative overflow-hidden mt-16 flex items-center justify-center">
      <Image alt="summer sale" src="/assets/banner.png" fill />
      <div className="relative text-white">
        <h2 className="text-6xl font-thin mt-5 mb-3">
          Big Summer <span className="font-bold">Sale</span>
        </h2>
        <p className="text-lg text-[#909090]">
          Created to change everything for the better. For everyone
        </p>
        <button className=" border-white border rounded-sm px-5 py-2 mt-5 duration-300 hover:bg-white hover:text-[#211C24]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Sale;
