//TODO: genarate all possible permutations of array elements
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function generateArrayPermutations(inputArray) {
  //Base condition: return once inputString is down to a single character
  if(inputArray.length < 2) return [inputArray];

  //Split input array at last index
  var splitIndex = inputArray.length - 1
  var mainChunk = inputArray.slice(0, splitIndex);
  var lastNumber = inputArray[splitIndex];

  //Recursively find all permutations of inputString without last character
  var mainChunkPermutations = generateArrayPermutations(mainChunk);

  //Iterate over each possible permutation of strings with lastCharacter removed
  var stringPermutations = []
  mainChunkPermutations.forEach(function(mainChunkPermutation){
    //Place lastCharacter at every possible index of permutation string
    for(let insertionPoint=0; insertionPoint<=splitIndex; insertionPoint++){
      var workingArray = mainChunkPermutation.slice(0);
      workingArray.splice(insertionPoint, 0, lastNumber);
      stringPermutations[stringPermutations.length] = workingArray;
    }
  })

  return stringPermutations;
}
