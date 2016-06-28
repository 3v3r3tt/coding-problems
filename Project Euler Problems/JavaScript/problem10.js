function primeSum(topLimit) {
  var sum = 0;
  isPrime = function(primeCandidate) {
    var top;
    var j = 2;
    top = Math.floor(Math.sqrt(primeCandidate));
    while (j <= top) {
      if (primeCandidate % j === 0) {
        return false;
      }
      j++;
    }
    return true;
  };

  for(i=2; i<topLimit; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;

}
