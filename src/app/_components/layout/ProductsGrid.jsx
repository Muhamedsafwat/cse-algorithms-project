"use client";
import React, { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import { sortByUserPreferences } from "@/utils/sortbyuserpreferences";

import ProductCard from "../cards/ProductCard";
import UserPreferencesPopup from "../popups/UserPreferencesPopup";
import {
  quicksortByPrice,
  quicksortByRating,
  quicksortByName,
} from "@/utils/quickSort";

const ProductsGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Show 6 products per page (2 rows of 3)
  const [sortedProducts, setSortedProducts] = useState(
    quicksortByName(products)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(sortedProducts);

  const [isUserPreferencesPopupOpen, setIsUserPreferencesPopupOpen] =
    useState(false);

  const [preferences, setPreferences] = useState({
    brand: 1,
    price: 1,
    rating: 1,
  });

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    if (searchTerm === "") {
      setSearchResults(sortedProducts);
    } else {
      const filteredProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(filteredProducts);
    }
  };

  // Update sortedProducts when products prop changes
  useEffect(() => {
    const newSortedProducts = quicksortByName(products);
    setSortedProducts(newSortedProducts);
    // Update search results with new sorted products
    if (searchQuery === "") {
      setSearchResults(newSortedProducts);
    } else {
      const filteredProducts = newSortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
    setCurrentPage(1); // Reset to first page when products change
  }, [products, searchQuery]);

  // Sort Products
  const sortProducts = (sortBy) => {
    let newSortedProducts;
    switch (sortBy) {
      case "pref":
        newSortedProducts = sortByUserPreferences(products, preferences);
        break;
      case "price-asc":
        newSortedProducts = quicksortByPrice(products);
        break;
      case "price-desc":
        newSortedProducts = quicksortByPrice(products).reverse();
        break;
      case "rating-asc":
        newSortedProducts = quicksortByRating(products);
        break;
      case "rating-desc":
        newSortedProducts = quicksortByRating(products).reverse();
        break;
      case "az":
        newSortedProducts = quicksortByName(products);
        break;
      case "za":
        newSortedProducts = quicksortByName(products).reverse();
        break;
    }
    setSortedProducts(newSortedProducts);

    // Update search results with new sorted products
    if (searchQuery === "") {
      setSearchResults(newSortedProducts);
    } else {
      const filteredProducts = newSortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };
  // Calculate total pages
  const totalPages = Math.ceil(searchResults.length / productsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page
    pages.push(1);
    // Add ellipsis after first page if current page is > 3
    if (currentPage > 3) {
      pages.push("...");
    }
    // Show current page if it's not first or last
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }
    // Add ellipsis before last page if current page is < totalPages - 2
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <div className="flex flex-col flex-1 mt-8">
        <div className="flex flex-row items-center">
          <p>
            Selected <span className="font-bold">{sortedProducts.length}</span>{" "}
            products
          </p>
          <div className="flex flex-row items-center gap-4 w-1/2 ml-auto">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2 flex-1"
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              name="sort"
              id="sort"
              defaultValue="az"
              className="border border-gray-300 rounded-md p-2 flex-1"
              onChange={(e) => sortProducts(e.target.value)}
            >
              <option value="pref">User Preferences</option>
              <option value="az">Name: A to Z</option>
              <option value="za">Name: Z to A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
            <button
              className="btn btn-square btn-primary btn-sm"
              onClick={() => setIsUserPreferencesPopupOpen(true)}
            >
              <LuSettings2 size={20} />
            </button>
          </div>
        </div>
        <div className="text-center py-5 grid grid-cols-4 gap-5 flex-1">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Previous
            </button>

            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="p-1">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`px-4 py-1 rounded-md ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
      {isUserPreferencesPopupOpen && (
        <UserPreferencesPopup
          setIsOpen={setIsUserPreferencesPopupOpen}
          preferences={preferences}
          setPreferences={setPreferences}
          sortProducts={sortProducts}
        />
      )}
    </>
  );
};

export default ProductsGrid;
