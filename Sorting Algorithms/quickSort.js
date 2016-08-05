function quickSort(items, left=0, right=items.length-1) {
  if (items.length > 1) {
    var index = partition(items, left, right);

    if (left < index - 1) quickSort(items, left, index - 1);
    if (index < right) quickSort(items, index, right);
  }

  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (items[left] < pivot) left++;
      while (items[right] > pivot) right--;
      if (left <= right) {
        [items[left], items[right]] = [items[right], items[left]];
        left++; right--;
      }
    }
    return left;
  }

  return items;
}
