var Node = function(str) {
  var newStr = str.slice(1)
  return {
    val: parseInt(str.charAt(0)),
    plus: newStr == "" ? null : new Node(newStr),
    minus: newStr == "" ? null : new Node(newStr),
    times: newStr == "" ? null : new Node(newStr)
  }
};
var someFunc = function(node, curResult, curResultStr, target) {
  if(node.plus == null && curResult == target) {
    console.log ('Match! ' + "---" + curResultStr);
  } else {
    someFunc(node.plus, curResult + node.plus.val, curResultStr + "+" + node.plus.val, target);
    someFunc(node.minus, curResult - node.minus.val, curResultStr + "-" + node.plus.val, target);
    someFunc(node.times, curResult * node.times.val, curResultStr + "*" + node.plus.val, target);
  }
};
var addOperators = function(num, target) {
  var root = new Node(num);
  someFunc(root, root.val, root.val + "", target);
};
