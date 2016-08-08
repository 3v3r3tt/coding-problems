//Q Matrix Approach O(log(n))
function matrixFib(n) {
  let times = (...matrices) =>
    matrices.reduce(
      ([a,b,c], [d,e,f]) => [a*d + b*e, a*e + b*f, b*e + c*f]
    );

  let power = (matrix, n) => {
    if (n === 1) return matrix;
    let halves = power(matrix, Math.floor(n / 2));

    return (n % 2 === 0 ? times(halves, halves) : times(halves, halves, matrix));
  }

  return (n < 2 ? n : power([1, 1, 0], n - 1)[0]);
}

matrixFib(6);
