export function binarySearchFirstGreaterOrEqual(
  arr,
  getValue,
  target,
  compare
) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const value = getValue(arr[mid]);

    if (compare(value, target) >= 0) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

export function binarySearchLastLessOrEqual(
  sortedArray,
  keyGetter,
  target,
  comparator
) {
  const compare = comparator || ((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = keyGetter(sortedArray[mid]);
    if (compare(midValue, target) <= 0) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
