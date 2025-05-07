// --------- imports --------- //
import filtering from "./filtering.js";
import { products } from "../data/products.js";

console.log("===== Test: filterByBrand (Apple) =====");
console.log(filtering.filterByBrand(products, "Apple"));

console.log("===== Test: filterByCategory (Smart watches) =====");
console.log(filtering.filterByCategory(products, "Smart watches"));

console.log("===== Test: filterByPrice (700 - 1000) =====");
console.log(filtering.filterByPrice(products, 700, 1000));

console.log("===== Test: filterByRating (min 4.5) =====");
console.log(filtering.filterByRating(products, 4.5));

console.log(
  "===== Test: filterByMultipleCategories (Smart watches, Laptops) ====="
);
console.log(
  filtering.filterByMultipleCategories(products, ["Smart watches", "Laptops"])
);

console.log("===== Test: filterByMultipleBrands (Apple, Samsung) =====");
console.log(filtering.filterByMultipleBrands(products, ["Apple", "Samsung"]));

console.log("===== Test: applyFilters =====");
console.log(
  filtering.applyFilters(products, {
    category: "Headphones",
    brand: "Apple",
    minPrice: 200,
    maxPrice: 700,
    minRating: 4.5,
  })
);
