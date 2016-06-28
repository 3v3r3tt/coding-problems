function findLargestPalindromeProduct(digits) {
  if(!digits || !parseInt(digits)){ return 'Please enter a number!'}
  if(digits > 3){ return 'Please enter a smaller number! Unless you want to freeze up your computer'}
  var largestPalindromeProduct, bottomLimit, topLimit;

  bottomLimit = Math.pow(10, digits-1);
  topLimit = parseInt('9'.repeat(digits));

  isPalindrome = function(candidate) {
    characterArray = candidate.split('');
    size = characterArray.length;
    for (i=0;i<Math.ceil(size/2);i++) {
      if(characterArray[i] != characterArray[size-1-i]){
        return false;
      }
    }
    return true;
  }

  jHistory = []
  for(j=bottomLimit; j<topLimit; j++) {
    for(k=bottomLimit; k<topLimit; k++){
      if(jHistory.indexOf(k) > -1) { continue; }
      product = j*k;
      if(isPalindrome(''+product)) {
        if(!largestPalindromeProduct || product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
        }
      }
    }
    jHistory.push(j)
  }
  return largestPalindromeProduct;
}
