"use client";
import { useState, useEffect } from "react";

import Hero from "./_components/sections/Hero";
import Sale from "./_components/sections/Sale";
import CategoryFilter from "./_components/sections/CategoryFilter";
import ProductsGrid from "./_components/layout/ProductsGrid";
import SideBar from "./_components/layout/SideBar";

import { products } from "@/data/products";
import { filterByCategory } from "@/utils/filtering";
export default function Home() {
  //filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState({
    price: {
      min: 0,
      max: 50000,
    },
    rating: 0,
    brand: [],
  });

  //results
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filterByCategory(products, selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Hero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex container mx-auto gap-8 py-5">
        <SideBar filter={filter} setFilter={setFilter} />
        <ProductsGrid products={filteredProducts} />
      </div>
      <Sale />
    </>
  );
}
