/**
 * @param {number} limit
 * @return {number}
 */
evenFibSum = function(limit) {
  var current, fib, last, sum;
  if (!(limit >= 2)) {
    return 0;
  }
  last = 1;
  current = sum = 2;
  while (current < limit) {
    fib = last + current;
    last = current;
    current = fib;
    if (fib % 2 === 0) {
      sum += fib;
    }
  }
  return sum;
};
