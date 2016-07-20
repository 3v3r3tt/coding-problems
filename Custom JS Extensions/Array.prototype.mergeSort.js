Array.prototype.mergeSort = function(sortKey, direction){
  var unsortedArray = this;
  if(unsortedArray.length < 2) return unsortedArray;

  var middle = Math.floor(unsortedArray.length/2);
  var leftSubArray = unsortedArray.slice(0,middle).mergeSort(sortKey, direction);
  var rightSubArray = unsortedArray.slice(middle).mergeSort(sortKey, direction);

  var sortedArray = merge(leftSubArray, rightSubArray);
  return sortedArray;

  function merge(left, right) {
    var combined = [];
    while(left.length>0 && right.length>0){
      var leftValue = (sortKey ? left[0][sortKey] : left[0]);
      var rightValue = (sortKey ? right[0][sortKey] : right[0]);
      combined.push((direction === 'desc' ? leftValue > rightValue : leftValue < rightValue) ? left.shift() : right.shift())
    }
    return combined.concat(left.length ? left : right)
  }
}
