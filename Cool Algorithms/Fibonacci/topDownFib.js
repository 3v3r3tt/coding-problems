//Top Down Approach O(2^n)
function Fib() {
  this.memoize = {}
}

Fib.prototype.nthFib = function(n) {
  if(n === 0 || n === 1) return n;

  if(this.memoize.hasOwnProperty(n)) {
    return this.memoize[n];
  };

  var result = this.nthFib(n - 1) + this.nthFib(n - 2);
  this.memoize[n] = result;

  return result;
}
var fibber = new Fib();
fibber.nthFib(6);
