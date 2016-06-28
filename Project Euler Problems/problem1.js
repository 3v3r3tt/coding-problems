/**
 * @param {number} n
 * @return {number}
 */
threeFiveSum = function(n){
  var total = 0;
  for(i=1;i<n;i++){
    if(i%3==0 || i%5==0) {
      total += i
    }
  }
  return total;
}
