function sumSquareDifference(topLimit) {
  var sumOfSquares = sum = 0;
  for(i=1; i<=topLimit; i++) {
    sumOfSquares += Math.pow(i, 2);
    sum += i;
  }
  var squareOfSums = Math.pow(sum, 2);
  return squareOfSums - sumOfSquares;
}
