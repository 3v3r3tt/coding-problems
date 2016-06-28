function findSmallestMultiple(topLimit) {
  var smallestMultiple;
  smallestMultipleCandidate = topLimit
  loop1:
    while(true) {
  loop2:
      for(i = 2; i <= topLimit; i++) {
        if(smallestMultipleCandidate % i != 0) {
          break loop2;
        }
        if(i == topLimit) {
          smallestMultiple = smallestMultipleCandidate;
          break loop1;
        }
      }
      smallestMultipleCandidate++
    }
  return smallestMultiple;
}
