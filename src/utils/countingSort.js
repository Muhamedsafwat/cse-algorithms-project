export function countingSort(items, keyGetter) {
  if (items.length === 0) return items;

  let min = Math.floor(keyGetter(items[0]));
  let max = Math.floor(keyGetter(items[0]));

  for (let i = 1; i < items.length; i++) {
    const val = Math.floor(keyGetter(items[i]));
    if (val < min) min = val;
    if (val > max) max = val;
  }

  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(items.length);

  for (let i = 0; i < items.length; i++) {
    count[Math.floor(keyGetter(items[i])) - min]++;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = items.length - 1; i >= 0; i--) {
    const val = Math.floor(keyGetter(items[i]));
    output[count[val - min] - 1] = items[i];
    count[val - min]--;
  }

  return output;
}
