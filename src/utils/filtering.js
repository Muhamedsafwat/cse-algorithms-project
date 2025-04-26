//imports
import { products } from "../data/products.js";

//filter by category
export function filterByCategory(products, categoryName) {
  return products.filter((product) => product.category.name === categoryName);
}

//filter by brand
export function filterByBrand(products, brandName) {
  return products.filter((product) => product.brand.name === brandName);
}

//filter by price
export function filterByPrice(products, minPrice, maxPrice) {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}

//filter by rating
export function filterByRating(products, minRating) {
  return products.filter((product) => product.rating >= minRating);
}

//-----applying filters-------//
export function applyFilters(products, filters) {
  let filteredProducts = [...products];

  // by category
  if (filters.category) {
    filteredProducts = filterByCategory(filteredProducts, filters.category);
  }

  //by brand
  if (filters.brand) {
    filteredProducts = filterByBrand(filteredProducts, filters.brand);
  }

  //by price
  if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
    filteredProducts = filterByPrice(
      filteredProducts,
      filters.minPrice,
      filters.maxPrice
    );
  }

  // by rating
  if (filters.minRating !== undefined) {
    filteredProducts = filterByRating(filteredProducts, filters.minRating);
  }

  return filteredProducts;
}

//------multi-value filters------//
export function filterByMultipleCategories(products, categories) {
  return products.filter((product) =>
    categories.includes(product.category.name)
  );
}

export function filterByMultipleBrands(products, brands) {
  return products.filter((product) => brands.includes(product.brand.name));
}

export default {
  filterByCategory,
  filterByBrand,
  filterByPrice,
  filterByRating,
  applyFilters,
  filterByMultipleCategories,
  filterByMultipleBrands,
};
