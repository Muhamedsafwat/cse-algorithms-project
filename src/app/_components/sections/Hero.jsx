import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r text-white h-screen from-[#211C24] to-[#2C2630]">
      <div className="container h-screen relative flex items-center mx-auto justify-between">
        <div>
          <p className="text-2xl font-semibold opacity-50">Pro, Beyond.</p>
          <h1 className="text-7xl font-thin mt-5 mb-3">
            Iphone 14 <span className="font-extrabold">Pro</span>
          </h1>
          <p className="text-lg text-[#909090]">
            Created to change everything for the better. For everyone
          </p>
          <button className=" border-white border rounded-sm px-5 py-2 mt-5 duration-300 hover:bg-white hover:text-[#211C24]">
            Shop Now
          </button>
        </div>
        <Image
          alt="iphone 14 pro"
          src="/assets/hero-iphone.png"
          width={400}
          height={400}
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Hero;
