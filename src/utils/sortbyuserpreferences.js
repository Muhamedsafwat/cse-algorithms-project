import { normalizePrice, normalizeRating, normalizeBrand } from './normalizers';

export function sortByUserPreferences(products, preferences) {
  const categoryId = preferences.categoryId;
  const filteredProducts = products.filter(p => p.category.id === categoryId);

  const prices = filteredProducts.map(p => p.price);
  const ratings = filteredProducts.map(p => p.rating);
  const brandIds = filteredProducts.map(p => p.brand.id);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const minRating = Math.min(...ratings);
  const maxRating = Math.max(...ratings);

  const minBrandId = Math.min(...brandIds);
  const maxBrandId = Math.max(...brandIds);

  const productsWithScore = filteredProducts.map(product => {
    const normalizedPrice = normalizePrice(product.price, minPrice, maxPrice);
    const normalizedRating = normalizeRating(product.rating, minRating, maxRating);
    const normalizedBrand = normalizeBrand(product.brand.id, minBrandId, maxBrandId);

    const score =
      normalizedPrice * (preferences.price ?? 0) +
      normalizedRating * (preferences.rating ?? 0) +
      normalizedBrand * (preferences.brand ?? 0);

    return { ...product, score };
  });

  return productsWithScore.sort((a, b) => b.score - a.score);
}



 // للاستخدام

 /* const preferences = {
  price: 0.5,
  rating: 0.3,
  brand: 0.2,
  categoryId: 1,
};


const sorted = sortByUserPreferences(products, preferences);
 */