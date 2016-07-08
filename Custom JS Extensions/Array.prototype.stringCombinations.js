Array.prototype.stringCombinations = function(){
  var fn = function(active, remaining, combinations) {
    if (!active && !remaining.length){
      return;
    }
    if (!remaining.length) {
      combinations.push(active.split(''));
    } else {
      fn(active + remaining[0], remaining.slice(1), combinations);
      fn(active, remaining.slice(1), combinations);
    }
    return combinations;
  }
  return fn("", this, []);
}
