/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0) return []
  var spiralMatrix = [];
  var width = originalWidth = matrix[0].length;
  var height = originalHeight = matrix.length;
  var direction = 'R';
  var row = column = fullIterations = 0;

  while(height > 0 && width > 0){
    switch (direction) {
      case "R":
        for(let r=originalWidth-width-fullIterations; r<width+fullIterations; r++){
          spiralMatrix.push(matrix[row+fullIterations][r]);
        }
        height--;
        direction = 'D';
        break;
      case "D":
        for(let d=originalHeight-height-fullIterations; d<=height+fullIterations; d++){
          spiralMatrix.push(matrix[d][width-1+fullIterations]);
        }
        width--;
        direction = 'L';
        break;
      case "L":
        for(let l=width-1; l+fullIterations>=originalWidth-width-1-fullIterations; l--){
          spiralMatrix.push(matrix[height+fullIterations][l+fullIterations]);
        }
        height--;
        direction = 'U';
        break;
      case "U":
        for(let u=height+fullIterations; u>=originalHeight-height-1-fullIterations; u--){
          spiralMatrix.push(matrix[u][fullIterations]);
        }
        width--;
        fullIterations++;
        direction = 'R';
        break;
    }
  }
  return spiralMatrix;
};

// var test = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
var test = [
  [1,2,3,35,99],
  [4,5,6,65,55],
  [7,8,9,10,23],
  [11,12,13,14,12],
  [123,32,11,44,21]
]
spiralOrder(test);
