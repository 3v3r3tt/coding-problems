//TODO: work in progress
String.prototype.possibleMutations = function(){
  var stringArray = this.split('');
  var mutations = mutatedStringArray = [];
  var length = stringArray.length;

  for(let i=0; i<length; i++){
    mutatedStringArray = stringArray;
    mutatedStringArray[length-2] = stringArray[length-1]
    mutatedStringArray[length-1] = stringArray[length-2]
    mutations.push(mutatedStringArray);
  }

  return mutations;
}


['a','b','c', 'd']

['a','b','c','d']
['a','b','d','c']

['a','c','b','d']
['a','c','d','b']

['a','d','b','c']
['a','d','c','b']
