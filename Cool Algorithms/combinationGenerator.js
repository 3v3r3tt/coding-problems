function generateCombinations(comboCreationElements, minComboLength) {
  minComboLength = minComboLength || 1;
  var generatedCombinations = [];
  var generate = function(currentComboLength, comboBuildingBlocks, currentCombo, generatedCombinations) {
    if(currentComboLength === 0){
      if(currentCombo.length > 0){
        generatedCombinations[generatedCombinations.length] = currentCombo;
      }
      return;
    }
    for (let buildingBlockPointer=0; buildingBlockPointer<comboBuildingBlocks.length; buildingBlockPointer++){
      generate(currentComboLength - 1, comboBuildingBlocks.slice(buildingBlockPointer + 1), currentCombo.concat([comboBuildingBlocks[buildingBlockPointer]]), generatedCombinations);
    }
    return;
  }

  var generatedCombinationPermutations = [];
  var usedElements = [];
  var permute = function(baseCombination) {
    var baseChunk;
    for(let p=0; p<baseCombination.length; p++){
      baseChunk = baseCombination.splice(p,1)[0];
      usedElements.push(baseChunk);
      if(baseCombination.length === 0){
        generatedCombinationPermutations.push(usedElements.slice());
      }
      permute(baseCombination);
      baseCombination.splice(p, 0, baseChunk);
      usedElements.pop();
    }
    return;
  }

  // Generate Combinations of Elements
  for(let currentComboLength=minComboLength; currentComboLength<comboCreationElements.length; currentComboLength++){
    generate(currentComboLength, comboCreationElements, [], generatedCombinations);
  }
  generatedCombinations.push(comboCreationElements);

  // Generate Permutations of Each Combination
  for(let i=0; i<generatedCombinations.length; i++){
    permute(generatedCombinations[i]);
  }

  return generatedCombinationPermutations;
}
