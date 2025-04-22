// --------- imports --------- //
import filtering from "./filtering.js";
import { products } from "./products.js";

const {
  filterByCategory,
  filterByBrand,
  filterByPrice,
  filterByRating,
  applyFilters,
  filterByMultipleCategories,
  filterByMultipleBrands,
  // filterByNewArrivals,
  //filterByDiscount,
  //filterByAvailability,
  getUniqueValues,
  clearFilters,
} = filtering;

/*
console.log("Testing filterByCategory...");
const filteredByCategory = filterByCategory(products, "Mobile phones");
console.log("Filtered by Category:", filteredByCategory);

console.log("\nTesting filterByBrand...");
const filteredByBrand = filterByBrand(products, "Apple");
console.log("Filtered by Brand:", filteredByBrand);

console.log("\nTesting filterByPriceRange...");
const filteredByPrice = filterByPrice(products, 1000, 2500);
console.log("Filtered by Price Range:", filteredByPrice);

console.log("\nTesting filterByRating...");
const filteredByRating = filterByRating(products, 4.8);
console.log("Filtered by Rating:", filteredByRating);

console.log("\nTesting applyFilters...");
const filters = {
  category: "Mobile phones",
  brand: "Apple",
  minPrice: 500,
  maxPrice: 1500,
};
const appliedFilters = applyFilters(products, filters);
console.log("Applied Filters:", appliedFilters);

console.log("\nTesting getUniqueValues...");
const uniqueCategories = getUniqueValues(products, "category");
const uniqueBrands = getUniqueValues(products, "brand");
console.log("Unique Categories:", uniqueCategories);
console.log("Unique Brands:", uniqueBrands);
*/
const filteredByCategories = filterByMultipleCategories(products, [
  "Mobile phones",
  "Laptops",
]);
console.log("Filtered by Multiple Categories:", filteredByCategories);

const filteredByBrands = filterByMultipleBrands(products, ["Apple", "Samsung"]);
console.log("Filtered by Multiple Brands:", filteredByBrands);
