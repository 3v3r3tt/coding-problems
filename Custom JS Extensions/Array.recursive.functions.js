const x = [1,2,3,4,5]

const head = ([h]) => h
console.log('head: ', head(x))

const tail = ([, ...t]) => t
console.log('tail: ', tail(x))

const copy = (array) => [...array]
console.log('copy: ', copy(x))

const isDefined = (x) => typeof x !== 'undefined'

const length = ([head, ...tail], lengthAccumulator = 0) => (
  	isDefined(head) ? length(tail, lengthAccumulator + 1) : lengthAccumulator
)
console.log('length: ', length(x))

const reverse = ([head, ...tail]) => (
  	isDefined(head) ? [...reverse(tail), head] : []
)
console.log('reverse: ', reverse(x))

const first = ([head, ...tail], n = 1) => (
  	isDefined(head) && n !== 0 ? [head, ...first(tail, n - 1)] : []
)
console.log('first 3: ', first(x, 3))

const last = (array, n = 1) => (
		reverse(first(reverse(array), n))
)
console.log('last 3: ', last(x, 3))

const slice = ([head, ...tail], index, value, currentIndex = 0) => {
  if (isDefined(head)) {
    return currentIndex === index ? [value, head, ...tail] : [head, ...slice(tail, index, value, currentIndex + 1)]
  } else {
    return []
  }
}
console.log('slice: ', slice(x, 2, 2.5))

const map = ([head, ...tail], fn) => (
  isDefined(head) ? [fn(head), ...map(tail, fn)] : []
)
console.log('double map: ', map(x, (y) => y * 2))

const filter = ([head, ...tail], fn) => {
  if (!isDefined(head)) return []
  if (fn(head)) {
    return [head, ...filter(tail, fn)]
  } else {
    return filter(tail, fn)
  }
}
console.log('filter less than 3: ', filter(x, (y) => y < 3))
