export function bucketSort(items, keyGetter, bucketSize = 0.5) {
  if (items.length === 0) return items;
  let minValue = 0;
  let maxValue = 5;

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < items.length; i++) {
    const val = keyGetter(items[i]);
    const bucketIndex = Math.floor((val - minValue) / bucketSize);

    const safeIndex = Math.min(bucketIndex, bucketCount - 1);
    buckets[safeIndex].push(items[i]);
  }

  const sortedItems = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length > 0) {
      insertionSort(buckets[i], keyGetter);
      sortedItems.push(...buckets[i]);
    }
  }

  return sortedItems;
}

function insertionSort(arr, keyGetter) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const currentVal = keyGetter(current);
    let j = i - 1;

    while (j >= 0 && keyGetter(arr[j]) > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
