// Top down approach ------------------------------------------

function DenominationCombinations() {
  this.memo = {}
}
DenominationCombinations.prototype.denominationCombinationsTopDown = function(amountLeft, denominationsLeft) {
  var memoKey = String([amountLeft, denominationsLeft]);
  if(this.memo.hasOwnProperty(memoKey)) {
    console.log('grabbing MEMO...');
    return this.memo[memoKey];
  }

  if(!amountLeft) return 1;
  if(amountLeft < 0 || denominationsLeft.length === 0) return 0;

  console.log('checking ways to make ' + amountLeft + ' with ' + denominationsLeft);

  var currentDenomination = denominationsLeft[0];
  var restOfDenominations = denominationsLeft.slice(1);
  var numberOfPossibilities = 0;

  while(amountLeft >= 0) {
    numberOfPossibilities += this.denominationCombinationsTopDown(amountLeft, restOfDenominations);
    amountLeft -= currentDenomination;
  }

  this.memo[memoKey] = numberOfPossibilities;
  return numberOfPossibilities;
}


// Bottom up approach ------------------------------------------


function denominationCombinationsBottomUp(amount, denominations) {
  var waysToMakeXCents = Array(amount).fill(0);
  waysToMakeXCents[0] = 1;

  for(let i=0; i<denominations.length; i++) {
    var currentDenomination = denominations[i];
    for(let higherAmount = currentDenomination; higherAmount<=amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      waysToMakeXCents[higherAmount] += waysToMakeXCents[higherAmountRemainder];
    }
  }

  return waysToMakeXCents[amount];
}
