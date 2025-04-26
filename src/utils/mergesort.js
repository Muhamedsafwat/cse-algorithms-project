// mergesort.js

// Merge Sort Algorithm (Always Ascending)
function mergeSort(arr, key) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(
      mergeSort(left, key),
      mergeSort(right, key),
      key
    );
  }
  
  // Helper function to merge two sorted arrays
  function merge(left, right, key) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (compare(left[i][key], right[j][key]) < 0) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Helper function to compare numbers or strings
  function compare(a, b) {
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }
    return a - b;
  }
  
  // Sort by Price (Ascending)
  export function mergesortByPrice(products) {
    return mergeSort(products, "price");
  }
  
  // Sort by Rating (Ascending)
  export function mergesortByRating(products) {
    return mergeSort(products, "rating");
  }
  
  // Sort by Name (Ascending)
  export function mergesortByName(products) {
    return mergeSort(products, "name");
  }
  
  /*
  ** for using **
  
  import { sortByPrice, sortByRating, sortByName } from './mergesort';
  
  const sortedByPriceASC  = mergesortByPrice(products);
  const sortedByRatingASC = mergesortByRating(products);
  const sortedByNameASC   = mergesortByName(products);
  
  const sortedByPriceDESC  = mergesortByPrice(products).reverse();
  const sortedByRatingDESC = mergesortByRating(products).reverse();
  const sortedByNameDESC   = mergesortByName(products).reverse();
  */
  