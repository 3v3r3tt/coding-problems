//Bottom Up Approach O(n)
function bottomUpFib(n) {
  if(n === 0 || n === 1) return n;

  var prevPrev = 0;
  var prev = 1;
  var current;

  for(let i=2; i<=n; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

bottomUpFib(6);
