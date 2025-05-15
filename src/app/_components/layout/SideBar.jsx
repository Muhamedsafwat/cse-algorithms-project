"use client";
import React from "react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import { brands } from "@/data/brands";

const SideBar = ({ filter, setFilter, applyFilters, resetFilters }) => {
  //rating change
  const handleRatingChange = (value) => {
    setFilter({ ...filter, rating: value });
  };

  //price change
  const handlePriceChange = (e, attribute) => {
    setFilter({
      ...filter,
      price: { ...filter.price, [attribute]: e.target.value },
    });
  };

  //brand change
  const handleBrandChange = (brandName) => {
    setFilter({
      ...filter,
      brand: filter.brand.includes(brandName)
        ? filter.brand.filter((brand) => brand !== brandName)
        : [...filter.brand, brandName],
    });
  };

  return (
    <div className="text-start p-5 w-1/4">
      <h2 className="text-2xl font-bold mb-6 text-neutral-800 border-b pb-1 border-neutral-300">
        Filter by:
      </h2>
      <h3 className="text-lg font-bold mb-2 text-neutral-800">Price</h3>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="price-min">Min</label>
          <input
            className="border border-neutral-300 rounded-md p-2 w-full"
            type="number"
            id="price-min"
            min={0}
            max={50000}
            step={50}
            value={filter.price.min}
            onChange={(e) => handlePriceChange(e, "min")}
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
            value={filter.price.max}
            onChange={(e) => handlePriceChange(e, "max")}
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-neutral-800 mt-5">Brand</h3>
      <div className="flex flex-col gap-2">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={brand.id}
              checked={filter.brand.includes(brand.name)}
              onChange={() => handleBrandChange(brand.name)}
            />
            <label key={brand.id} htmlFor={brand.id}>
              {brand.name}
            </label>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2 text-neutral-800 mt-5">Rating</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Rating
            className="max-w-24"
            value={filter.rating}
            onChange={handleRatingChange}
          />
          <p>And above</p>
        </div>
      </div>
      <div className="my-5 flex gap-2">
        <button
          className="btn btn-success !text-white btn-sm "
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        <button
          className="btn btn-error !text-white btn-sm "
          onClick={resetFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SideBar;
