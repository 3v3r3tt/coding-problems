function findTriangularNumberWithFactorCountOf(factorCountThreshold) {
  var i = 1;
  var triangleNumber = 0;
  var primeFactors = []

  getFactorCount = function(number) {
    var factorCount = 0;
    for(j=1;j<=number;j++){
      if(number%j === 0){
        factorCount++;
      }
    }
    return factorCount;
  }

  findPrimeFactorization = function(x) {
    factors = findFactors(x);
    for(l=0;l<factors.length;l++){
      if(isPrime(factors[l])){
        primeFactors.push(factors[l]);
      } else {
        findPrimeFactorization(factors[l])
      }
    }
  }

  findFactors = function(y) {
    var factors = [];
    for(k=1;k<=number;k++){
      if(number%k === 0){
        factors.push(k);
      }
    }
    return factors;
  }

  while(true) {
    triangleNumber += i;
    if(getFactorCount(triangleNumber) > factorCountThreshold){
      return triangleNumber;
    }
    i++;
  }
}
