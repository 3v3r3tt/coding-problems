const options = [
  ['small', 'medium', 'large'],
  ['vanilla', 'chocolate', 'hazelnut'],
  ['sugar', 'no sugar']
]

const generateCombinations = ([head=[], ...[headTail, ...tailTail]]) => {
  if (!headTail) return head

  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h} ${x}`))
  }, [])

  return generateCombinations([combined, ...tailTail])
}

console.log(generateCombinations(options))
