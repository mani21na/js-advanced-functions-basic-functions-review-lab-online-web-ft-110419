// Your code here
function wrapAdjective(string = "*") {
  return function (special) {
    return `You are ${special}`
  }
}
