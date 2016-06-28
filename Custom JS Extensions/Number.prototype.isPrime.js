Number.prototype.isPrime = function() {
  var primeCandidate = this;
  if(primeCandidate <= 1 || primeCandidate%1 !== 0) return false
  var i = 2;
  var top = Math.floor(Math.sqrt(primeCandidate));
  while(i<=top){
    if(primeCandidate%i === 0){ return false; }
    i++;
  }
  return true;
}
