function largestPrimeFactor(x) {
  var isPrime, largestPrimeFactor;
  checkFactorsPrimality = function(number) {
    var i, lpfTopLimit;
    i = largestPrimeFactor = 1;
    lpfTopLimit = Math.floor(Math.sqrt(number));
    while (i <= lpfTopLimit) {
      if(number % i == 0) {
        if (isPrime(number / i)) {
          largestPrimeFactor = number / i;
        } else if (isPrime(i) && i > largestPrimeFactor) {
          largestPrimeFactor = i;
        }
      }
      i++;
    }
    return largestPrimeFactor;
  };
  isPrime = function(primeCandidate) {
    if(primeCandidate % 1 != 0) { return false; }
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
  return checkFactorsPrimality(x);
}
