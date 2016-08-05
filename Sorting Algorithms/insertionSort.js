function insertionSort(unsortedArray) {
  var sortedArray = [];

  while(unsortedArray.length){
    var minValue = Math.min(...unsortedArray);
    sortedArray.push(minValue);
    unsortedArray.splice(unsortedArray.indexOf(minValue),1);
  }

  return sortedArray;
}
