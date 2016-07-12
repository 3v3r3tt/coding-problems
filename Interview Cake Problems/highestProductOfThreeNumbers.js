function highestProductOfThree(array){
  if(array.length < 3){ throw new Error('Array must have at least 3 numbers.') }
  var highestNumber = Math.max(array[0], array[1]);
  var lowestNumber = Math.min(array[0], array[1]);
  var highestProductOfTwo = array[0]*array[1];
  var lowestProductOfTwo = array[0]*array[1];
  var highestProductOfThree = highestProductOfTwo*array[2];

  for(let i=2; i<array.length; i++){
    currentNumber = array[i];
    highestProductOfThree = Math.max(highestProductOfThree, currentNumber*highestProductOfTwo, currentNumber*lowestProductOfTwo);
    highestProductOfTwo = Math.max(highestProductOfTwo, currentNumber*highestNumber, currentNumber*lowestNumber);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, currentNumber*highestNumber, currentNumber*lowestNumber)
    highestNumber = Math.max(highestNumber, currentNumber);
    lowestNumber = Math.min(lowestNumber, currentNumber);
  }

  return highestProductOfThree;
}
