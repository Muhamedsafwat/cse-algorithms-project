import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="text-center bg-neutral-100 p-5 rounded-lg shadow-md hover:shadow-lg flex flex-col hover:scale-[1.02] duration-200">
      <div className="w-full h-40 relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          fill
        />
      </div>
      <h2 className="text-lg mt-2 text-neutral-800 max-w-48 mx-auto leading-tight mb-auto">
        {product.name}
      </h2>
      <p className="font-bold text-gray-600 mt-5">{product.price}$</p>
      <button className="bg-black text-white px-4 py-2 rounded-md mt-3 hover:bg-neutral-800 transition-colors active:scale-95">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
