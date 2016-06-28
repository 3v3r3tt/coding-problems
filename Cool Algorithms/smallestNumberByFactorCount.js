function smallestNumberByFactorCount(factorCount) {

  function isPrime(primeCandidate) {
    var p = 2;
    var top = Math.floor(Math.sqrt(primeCandidate));
    while(p<=top){
      if(primeCandidate%p === 0){ return false; }
      p++;
    }
    return true;
  }

  function findPrimeAfter(currentPrime) {
    var nextPrimeCandidate = currentPrime + 1
    while(true) {
      if(isPrime(nextPrimeCandidate)){
        return nextPrimeCandidate;
      } else {
        nextPrimeCandidate++;
      }
    }
  }

  function findPrimeFactors(factorParent) {
    var primeFactors = [];
    var primeFactorCandidate = 2;
    while(factorParent !== 1){
      while(factorParent % primeFactorCandidate === 0 && factorParent !== 1 ){
        primeFactors.push(primeFactorCandidate);
        factorParent /= primeFactorCandidate;
      }
      primeFactorCandidate = findPrimeAfter(primeFactorCandidate);
    }
    return primeFactors;
  }

  function sortArrayByValue(a,b){
    return a-b;
  }

  function clone3DArray(arrayOfArrays) {
    var cloneArray = arrayOfArrays.map(function(arr) {
      return arr.slice();
    });
    return cloneArray;
  }

  function doesArrayOfArraysContainArray(arrayOfArrays, array){
    var aOA = clone3DArray(arrayOfArrays);
    var a = array.slice(0);
    for(let i=0; i<aOA.length; i++){
      if(aOA[i].sort().join(',') === a.sort().join(',')){
        return true;
      }
    }
    return false;
  }

  function removeDuplicateArrays(combinations) {
    var uniqueCombinations = []
    for(let c=0; c<combinations.length; c++){
      if(!doesArrayOfArraysContainArray(uniqueCombinations, combinations[c])){
        uniqueCombinations[uniqueCombinations.length] = combinations[c];
      }
    }
    return uniqueCombinations;
  }

  function generateCombinations(parentArray, minComboLength) {
    var generate = function(n, src, got, combinations) {
      if(n === 0){
        if(got.length > 0){
          combinations[combinations.length] = got;
        }
        return;
      }
      for (let j=0; j<src.length; j++){
        generate(n - 1, src.slice(j + 1), got.concat([src[j]]), combinations);
      }
      return;
    }
    var combinations = [];
    for(let i=minComboLength; i<parentArray.length; i++){
      generate(i, parentArray, [], combinations);
    }
    combinations.push(parentArray);
    return combinations;
  }

  function generateCombinedFactorCombinations(primeFactors, primeFactorCombinations) {
    var candidates = [];
    for(let p=0; p<primeFactorCombinations.length; p++){
      var product = 1;
      var primeFactorsCopy = primeFactors.slice(0);
      for(let q=0; q<primeFactorCombinations[p].length; q++){
        product *= primeFactorCombinations[p][q];
        primeFactorsCopy.splice(primeFactorsCopy.indexOf(primeFactorCombinations[p][q]), 1);
      }
      primeFactorsCopy.push(product);
      candidates[candidates.length] = primeFactorsCopy.sort(sortArrayByValue).reverse();
    }
    return candidates;
  }

  function determineMinimumCobination (candidates){
    var minimumValue = Infinity;
    var bestFactorCadidate = []
    for(let y=0; y<candidates.length; y++){
      var currentValue = 1;
      var currentPrime = 2;
      for(let z=0; z<combinedFactorCandidates[y].length; z++){
        currentValue *= Math.pow(currentPrime,(combinedFactorCandidates[y][z])-1);
        currentPrime = findPrimeAfter(currentPrime);
      }
      if(currentValue < minimumValue){
        minimumValue = currentValue;
        bestFactorCadidate = combinedFactorCandidates[y];
      }
    }
    return minimumValue;
  }

  var primeFactors = findPrimeFactors(factorCount);
  var primeFactorCombinations = removeDuplicateArrays(generateCombinations(primeFactors, 1));
  var combinedFactorCandidates = generateCombinedFactorCombinations(primeFactors, primeFactorCombinations);
  var smallestNumberWithFactorCount = determineMinimumCobination(combinedFactorCandidates);

  return smallestNumberWithFactorCount;
}
