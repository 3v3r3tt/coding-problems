function findLargestPalindromeProduct(digits) {
  if(!digits || !parseInt(digits)){ return 'Please enter a number!'}
  if(digits > 6){ return 'Please enter a smaller number! Unless you want to freeze up your computer'}
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
  for(j=topLimit; j>bottomLimit; j--) {
    for(k=topLimit; k>bottomLimit; k--){
      if(jHistory.indexOf(k) > -1) { continue; }
      product = j*k;
      if(isPalindrome(''+product)) {
        if(!largestPalindromeProduct || product > largestPalindromeProduct) {
          largestPalindromeProduct = product;
          return largestPalindromeProduct;
        }
      }
    }
    jHistory.push(j)
  }
}
