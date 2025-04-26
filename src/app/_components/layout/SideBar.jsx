"use client";
import React from "react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import { brands } from "@/data/brands";
const SideBar = () => {
  const [rating, setRating] = useState(0); // Initial value

  return (
    <div className="text-start p-5 w-1/4 max-h-[600px] sticky top-16">
      <h2 className="text-2xl font-bold mb-6 text-neutral-800 border-b pb-1 border-neutral-300">
        Filter by:
      </h2>
      <h3 className="text-lg font-bold mb-2 text-neutral-800">Price</h3>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="price-min">Min</label>
          <input
            className="border border-neutral-300 rounded-md p-2 w-full"
            type="number"
            id="price-min"
            min={0}
            max={50000}
            step={50}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="price-max">Max</label>
          <input
            className="border border-neutral-300 rounded-md p-2 w-full"
            type="number"
            id="price-max"
            min={0}
            max={50000}
            step={50}
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-neutral-800 mt-5">Brand</h3>
      <div className="flex flex-col gap-2">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center gap-2">
            <input type="checkbox" id={brand.id} />
            <label key={brand.id} htmlFor={brand.id}>
              {brand.name}
            </label>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2 text-neutral-800 mt-5">Rating</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Rating className="max-w-24" value={rating} onChange={setRating} />
          <p>And above</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
