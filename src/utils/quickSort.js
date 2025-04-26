// quicksort.js

// Quick Sort Algorithm (Always Ascending)
function quickSort(arr, key) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (compare(arr[i][key], pivot[key]) < 0) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
  }
  
  // Helper function to compare numbers or strings
  function compare(a, b) {
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b); // compare strings lexicographically
    }
    return a - b; // compare numbers
  }
  
  // Sort by Price (Ascending)
  export function quicksortByPrice(products) {
    return quickSort(products, "price");
  }
  
  // Sort by Rating (Ascending)
  export function quicksortByRating(products) {
    return quickSort(products, "rating");
  }
  
  // Sort by Name (Ascending)
  export function quicksortByName(products) {
    return quickSort(products, "name");
  }
  
  /*
        ** for using **
  
  import { sortByPrice, sortByRating, sortByName } from './quicksort';
  
  const sortedByPriceASC  = quicksortByPrice(products);
  const sortedByRatingASC = quicksortByRating(products);
  const sortedByNameASC   = quicksortByName(products);
  
  const sortedByPriceDESC  = quicksortByPrice(products).reverse();
  const sortedByRatingDESC = quicksortByRating(products).reverse();
  const sortedByNameDESC   = quicksortByName(products).reverse();
  */
  