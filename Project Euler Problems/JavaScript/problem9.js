function findSpecialPythagoreanTriplet(tripletSum) {
  var pointer = 2;
  isPythagoreanTriplet = function(x, y, z) {
    if(Math.pow(x,2) + Math.pow(y,2) == Math.pow(z,2)){
      return true;
    } else {
      return false;
    }
  }

  while(true){
    for(i=0; i<pointer; i++){
      for(j=pointer+1; j<tripletSum; j++){
        if(i+pointer+j == tripletSum && isPythagoreanTriplet(i, pointer, j)){
          return i*pointer*j;
        }
      }
    }
    pointer++;
  }
  return abcProduct;
}
