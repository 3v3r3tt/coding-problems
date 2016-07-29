function generatePermutations(inputString) {
  if(inputString.length < 2) return new Set(inputString);

  var allCharactersExceptLast = inputString.slice(0, -1);
  var lastCharacter = inputString[inputString.length - 1];

  var permutationsOfAllCharactersExceptLast = generatePermutations(allCharactersExceptLast);

  var stringPermutations = new Set();
  permutationsOfAllCharactersExceptLast.forEach(function(permutationOfAllCharactersExceptLast) {
    for(let position=0; position<=permutationOfAllCharactersExceptLast.length; position++){
      var permutation = permutationOfAllCharactersExceptLast.slice(0, position) + lastCharacter + permutationOfAllCharactersExceptLast.slice(position);
      stringPermutations.add(permutation);
    }
  });

  return stringPermutations;
}
