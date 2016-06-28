Array.prototype.containsArray = function(array){
    if(!this[0] || !this[0][0]) console.log('This function only works on 2 dimensional arrays!');
    for(let i=0; i<this.length; i++){
      if(this[i].sort().join(',') === array.sort().join(',')){
        return true
      }
    }
    return false;
  }
