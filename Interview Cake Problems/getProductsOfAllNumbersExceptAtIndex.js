function getProductsOfAllIntsExceptAtIndex (originalArray){
    var modifiedArray = [];
    var productSoFar = 1;
	for(var i=0; i<originalArray.length; i++){
        modifiedArray[i] = productSoFar;
        productSoFar *= originalArray[i];
    }

    var productSoFar = 1;
    for(var j=originalArray.length; j--; ){
        modifiedArray[j] *= productSoFar;
        productSoFar *= originalArray[j];
    }

    return modifiedArray;
}

console.log(getProductsOfAllIntsExceptAtIndex ([1, 7, 3, 4]))
