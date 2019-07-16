
/*

(1)
Infix:  (5 + 4) * 2
RPN:    5 4 + 2 *     9 2 *
Output: 18

(2)
Infix: 30 - (36 / (4 * 3))
RPN: 30 36 4 3 * / -
Output: 27

*/

// “30 36 4 3 * / -”
function evaluate(rpn: string): number {
  const elements = rpn.split(“ “)
  let stack = []

  let currentIndex = 0
  for (let i = 0; i < elements.length; i++) {
    const currentElement = elements[i]
    if (isNumber(currentElement)) {
      stack.push(currentElement)
    } else {
      const a = stack.pop()
      const b = stack.pop()
    	switch (currentElement) {
        case “+”: stack.push(Number(b) + Number(a)); break
        case “-”: stack.push(Number(b) - Number(a)); break
        case “*”: stack.push(Number(b) * Number(a)); break
        case “/”: stack.push(Number(b) / Number(a)); break
        case “^”: stack.push(Math.pow(Number(b), Number(a))); break
      }
    }
  }
  return stack[0]
}

const isNumber = n => !isNaN(Number(n)
