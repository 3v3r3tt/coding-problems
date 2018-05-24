String.prototype.permutations = function () {
  const baseString = this

  const generatePermutations = (availableLetters, usedLetters = '') => {
    if (!availableLetters) {
      permutations.push(usedLetters)
    } else {
      for (let i = 0; i < availableLetters.length; i++) {
        const remainingLetters = availableLetters.slice(0, i) + availableLetters.slice(i + 1)
        generatePermutations(remainingLetters, usedLetters + availableLetters[i])
      }
    }
  }

  let permutations = []
  generatePermutations(baseString)
  return permutations
}

const x = 'CAT'
console.log(x.permutations())
