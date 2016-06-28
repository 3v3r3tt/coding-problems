Object.prototype.clone = function(){
  var obj = this;
  var copy = obj.constructor();
  
  for(var attr in obj){
    if(obj.hasOwnProperty(attr)){
      copy[attr] = obj[attr]
    }
  }
  return copy;
}
