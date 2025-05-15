"use client";
import { useState, useEffect } from "react";

import Hero from "./_components/sections/Hero";
import Sale from "./_components/sections/Sale";
import CategoryFilter from "./_components/sections/CategoryFilter";
import ProductsGrid from "./_components/layout/ProductsGrid";
import SideBar from "./_components/layout/SideBar";

import { products } from "@/data/products";
import {
  filterByCategory,
  filterByMultipleBrands,
  filterByPrice,
  filterByRating,
} from "@/utils/filtering";
import Swal from "sweetalert2";

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

  //apply filters
  const applyFilters = () => {
    const applyPrice = filter.price.min !== 0 || filter.price.max !== 50000;
    const applyRating = filter.rating !== 0;
    const applyBrand = filter.brand.length > 0;

    //reset products to all first
    let currentProducts =
      selectedCategory == "All"
        ? products
        : filterByCategory(products, selectedCategory);

    //apply new filters
    if (!applyPrice && !applyRating && !applyBrand) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must apply at least one filter",
      });
      return;
    }

    if (applyPrice) {
      currentProducts = filterByPrice(
        currentProducts,
        filter.price.min,
        filter.price.max
      );
    }
    if (applyRating) {
      currentProducts = filterByRating(currentProducts, filter.rating);
    }
    if (applyBrand) {
      currentProducts = filterByMultipleBrands(currentProducts, filter.brand);
    }

    // Update state once with all filters applied
    setFilteredProducts(currentProducts);
  };

  //reset filters
  const resetFilters = () => {
    setFilter({
      price: {
        min: 0,
        max: 50000,
      },
      rating: 0,
      brand: [],
    });

    setFilteredProducts(
      selectedCategory == "All"
        ? products
        : filterByCategory(products, selectedCategory)
    );
  };

  return (
    <>
      <Hero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        resetFilters={resetFilters}
      />
      <div className="flex container mx-auto gap-8 py-5">
        <SideBar
          filter={filter}
          setFilter={setFilter}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />
        <ProductsGrid products={filteredProducts} />
      </div>
      <Sale />
    </>
  );
}
