Array.prototype.heapSort = function() {
  var unsortedArray = this;

  class BinaryHeap {
    constructor() {
      this.content = [];
    }

    push(elementToAdd) {
      this.content.push(elementToAdd);
      this.bubbleUp(this.content.length - 1);
    }

    pop() {
      var result = this.content[0];
      var end = this.content.pop();

      if(this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }
      return result;
    }

    remove(elementToRemove) {
      var length = this.content.length;
      for(let i=0; i<length; i++) {
        if(this.content[i] != elementToRemove) continue;
        var end = this.content.pop();
        if(i == length-1) break;
        this.content[i] = end;
        this.bubbleUp(i);
        this.sinkDown(i);
        break;
      }
    }

    size() {
      return this.content.length;
    }

    bubbleUp(currentIndex) {
      var currentElement = this.content[currentIndex];
      while(currentIndex > 0) {
        var parentIndex = Math.floor(currentIndex+1/2) - 1;
        var parentElement = this.content[parentIndex];
        if(currentElement >= parentElement) break;

        this.content[parentIndex] = currentElement;
        this.content[currentIndex] = parentElement;
        currentIndex = parentIndex;
      }
    }

    sinkDown(currentIndex) {
      var length = this.content.length;
      var currentElement = this.content[currentIndex];

      while(true) {
        var child1Index = (currentIndex + 1) * 2 - 1;
        var child2Index = child1Index + 1;
        var swapIndex = null;

        if(child1Index < length) {
          var child1 = this.content[child1Index];
          if(child1 < currentElement) {
            swapIndex = child1Index;
          }
        }
        if(child2Index < length) {
          var child2 = this.content[child2Index];
          if(child2 < currentElement && child2 < child1) {
            swapIndex = child2Index;
          }
        }

        if(!swapIndex) break;

        this.content[currentIndex] = this.content[swapIndex];
        this.content[swapIndex] = currentElement;
        currentIndex = swapIndex;
      }
    }
  }

  var sortedHeap = new BinaryHeap();
  unsortedArray.forEach(function(element) {
    sortedHeap.push(element);
  });

  var sortedArray = [];
  while(sortedHeap.size()) {
    sortedArray.push(sortedHeap.pop())
  }

  return sortedArray;
}
