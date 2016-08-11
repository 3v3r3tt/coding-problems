//Q Matrix Approach O(log(n))
function matrixFib(n) {
  function times([[a,b],[c,d]], [[e,f],[g,h]]) {
    return [[a*e + b*g, a*f + b*h],[c*e + d*g , c*f + d*h]];
  }

  function power(matrix, n) {
    if (n === 1) return matrix;
    let halves = power(matrix, Math.floor(n / 2));
    return (n % 2 === 0 ? times(halves, halves) : times(times(halves, halves), matrix));
  }

  return (n < 2 ? n : power([[1,1],[1,0]], n - 1)[0][0]);
}
