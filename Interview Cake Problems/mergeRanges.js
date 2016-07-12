function mergeRanges(rangeArray){
  var sortedRanges = rangeArray.slice().sort(function(a,b){
    return a.startTime > b.startTime ? 1 : -1;
  })

  var mergedRanges = [sortedRanges[0]];
  for(let i=1; i<rangeArray.length; i++){
    var currentRange = rangeArray[i];
    var lastMergedRange = mergedRanges[mergedRanges.length-1];
    if(lastMergedRange.endTime >= currentRange.startTime){
      lastMergedRange.endTime = Math.max(currentRange.endTime, lastMergedRange.endTime);
    } else {
      mergedRanges.push(currentRange);
    }
  }
  return mergedRanges;
}

var x = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

mergeRanges(x);
