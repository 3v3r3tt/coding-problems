function findNthPrime(nthOccurance) {
  var primeCount = 0;
  var i = 2;

  isPrime = function(primeCandidate) {
    var j, pTopLimit;
    j = 2;
    pTopLimit = Math.floor(Math.sqrt(primeCandidate));
    while (j <= pTopLimit) {
      if (primeCandidate % j === 0) {
        return false;
      }
      j++;
    }
    return true;
  };

  while(true) {
    if(isPrime(i)){
      primeCount++;
      if(primeCount == nthOccurance){
        return i;
      }
    }
    i++;
  }
}
