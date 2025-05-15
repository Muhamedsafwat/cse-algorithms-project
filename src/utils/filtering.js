//imports
import { countingSort } from "./countingSort.js";
import { bucketSort } from "./bucketSort.js";
import {
  binarySearchFirstGreaterOrEqual,
  binarySearchLastLessOrEqual,
} from "./binarysearch.js";

//filter by category
export function filterByCategory(products, categoryName) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category.name === categoryName) {
      result.push(products[i]);
    }
  }
  return result;
}

//filter by brand
export function filterByBrand(products, brandName) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].brand?.name === brandName) {
      result.push(products[i]);
    }
  }
  return result;
}

//filter by price-------------------------
// first: sorting prices => countng sort
function sortProductsByPrice(products) {
  return countingSort(products, (p) => p.price);
}
//filtering => binary search
export function filterByPrice(products, minPrice, maxPrice) {
  const sorted = sortProductsByPrice(products);
  const start = binarySearchFirstGreaterOrEqual(
    sorted,
    (p) => p.price,
    minPrice,
    (a, b) => a - b
  );

  const end = binarySearchLastLessOrEqual(sorted, (p) => p.price, maxPrice);
  if (start === -1 || end === -1 || start > end) return [];
  return sorted.slice(start, end + 1);
}

//filter by rating------------------------
//first: sorting rates=> bucket sort
function sortProductsByRating(products) {
  const sorted = bucketSort(products, (p) => p.rating);
  return sorted;
}
//filtering => binary search
export function filterByRating(products, minRating) {
  const sorted = sortProductsByRating(products);
  const start = binarySearchFirstGreaterOrEqual(
    sorted,
    (p) => p.rating,
    minRating,
    (a, b) => a - b
  );

  if (start === -1) return [];
  return sorted.slice(start);
}

//filter by multiple brands
export function filterByMultipleBrands(products, brandNames) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (brandNames.includes(products[i].brand?.name)) {
      result.push(products[i]);
    }
  }
  return result;
}

export default {
  filterByCategory,
  filterByBrand,
  filterByPrice,
  filterByRating,
  filterByMultipleBrands,
};
