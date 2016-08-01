//TODO: Given an integer, convert it to a roman numeral.
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if(num < 0 || num > 3999) throw Error('Please enter a number between 0 and 3999');

  var romanNumeral = '';

  var oneDigit = num % 10;
  if (oneDigit < 4) {
    romanNumeral = 'I'.repeat(oneDigit) + romanNumeral;
  } else if (oneDigit < 9) {
    romanNumeral = 'I'.repeat(Math.max(0, 5 - oneDigit)) + 'V' + 'I'.repeat(Math.max(0, oneDigit-5)) + romanNumeral;
  } else {
    romanNumeral = 'I'.repeat(10 - oneDigit) + 'X'
  }

  if (num > 9){
    var tenDigit = (num - oneDigit)/10 % 10;
    if (tenDigit < 4) {
      romanNumeral = 'X'.repeat(tenDigit) + romanNumeral;
    } else if (tenDigit < 9) {
      romanNumeral = 'X'.repeat(Math.max(0, 5 - tenDigit)) + 'L' + 'X'.repeat(Math.max(0, tenDigit-5)) + romanNumeral;
    } else {
      romanNumeral = 'X'.repeat(10 - tenDigit) + 'C' + romanNumeral;
    }

    if(num > 99) {
      var hundredDigit = (num - oneDigit - tenDigit*10)/100 % 10;
      if (hundredDigit < 4) {
        romanNumeral = 'C'.repeat(hundredDigit) + romanNumeral;
      } else if (hundredDigit < 9) {
        romanNumeral = 'C'.repeat(Math.max(0, 5 - hundredDigit)) + 'D' + 'C'.repeat(Math.max(0, hundredDigit-5)) + romanNumeral;
      } else {
        romanNumeral = 'C'.repeat(10 - hundredDigit) + 'M' + romanNumeral;
      }

      if(num > 999) {
        var thousandDigit = (num - oneDigit - tenDigit*10 - hundredDigit*100)/1000 % 10;
        if (thousandDigit < 4) {
          romanNumeral = 'M'.repeat(thousandDigit) + romanNumeral;
        }
      }
    }
  }

  return romanNumeral;
};
