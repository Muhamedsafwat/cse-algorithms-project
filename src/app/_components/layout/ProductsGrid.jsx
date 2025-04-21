import React from "react";
import ProductCard from "../cards/ProductCard";
const ProductsGrid = () => {
  return (
    <div className="text-center py-5 grid grid-cols-3 gap-5 flex-1">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsGrid;
