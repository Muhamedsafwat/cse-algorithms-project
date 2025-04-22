import React from "react";
import { CiShoppingCart } from "react-icons/ci";

import CategoryCard from "../cards/CategoryCard";
import { categories } from "@/data/categories";

const CategoryFilter = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-neutral-800">
        Browse by Categories:
      </h2>
      <div className="flex justify-between gap-7">
        <CategoryCard icon={<CiShoppingCart size={40} />} name="All" />
        {categories.map((item) => (
          <CategoryCard key={`category-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
