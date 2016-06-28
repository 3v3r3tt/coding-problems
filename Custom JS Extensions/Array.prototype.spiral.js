Array.prototype.spiral = function() {
  if(this.length === 0) return []
  var spiralMatrix = [];
  var width = originalWidth = this[0].length;
  var height = originalHeight = this.length;
  var direction = 'R';
  var row = column = fullIterations = 0;

  while(height > 0 && width > 0){
    switch (direction) {
      case "R":
        for(let r=originalWidth-width-fullIterations; r<width+fullIterations; r++){
          spiralMatrix.push(this[row+fullIterations][r]);
        }
        height--;
        direction = 'D';
        break;
      case "D":
        for(let d=originalHeight-height-fullIterations; d<=height+fullIterations; d++){
          spiralMatrix.push(this[d][width-1+fullIterations]);
        }
        width--;
        direction = 'L';
        break;
      case "L":
        for(let l=width-1; l+fullIterations>=originalWidth-width-1-fullIterations; l--){
          spiralMatrix.push(this[height+fullIterations][l+fullIterations]);
        }
        height--;
        direction = 'U';
        break;
      case "U":
        for(let u=height+fullIterations; u>=originalHeight-height-1-fullIterations; u--){
          spiralMatrix.push(this[u][fullIterations]);
        }
        width--;
        fullIterations++;
        direction = 'R';
        break;
    }
  }
  return spiralMatrix;

  // input: [
  //  [ 1, 2, 3 ],
  //  [ 4, 5, 6 ],
  //  [ 7, 8, 9 ]
  // ]
  // output: [1,2,3,6,9,8,7,4,5];
}
