Number.prototype.primeFactors = function() {
  var number = this.valueOf();
  var primeFactors = [];

  isPrime = function(primeCandidate) {
    var p = 2;
    var top = Math.floor(Math.sqrt(primeCandidate));
    while(p<=top){
      if(primeCandidate%p === 0){ return false; }
      p++;
    }
    return true;
  }

  findPrimeAfter = function(currentPrime) {
    nextPrimeCandidate = currentPrime + 1
    while(true) {
      if(isPrime(nextPrimeCandidate)){
        return nextPrimeCandidate;
      } else {
        nextPrimeCandidate++;
      }
    }
  }

  findPrimeFactors = function(x) {
    var primeFactorCandidate = 2;
    while(x != 1){
      while(x % primeFactorCandidate === 0 && x != 1 ){
        primeFactors.push(primeFactorCandidate);
        x /= primeFactorCandidate;
      }
      primeFactorCandidate = findPrimeAfter(primeFactorCandidate);
    }
  }

  findPrimeFactors(number);
  return primeFactors;
}
