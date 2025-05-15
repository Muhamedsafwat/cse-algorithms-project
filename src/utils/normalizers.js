export function normalizePrice(value, min, max) {
  if (max === min) return 1;
  return 1 - (value - min) / (max - min);
}

export function normalizeRating(value, min, max) {
  if (max === min) return 1;
  return (value - min) / (max - min);
}

export function normalizeBrand(brandId, minId, maxId) {
  if (maxId === minId) return 1;
  return (maxId - brandId) / (maxId - minId);
}
