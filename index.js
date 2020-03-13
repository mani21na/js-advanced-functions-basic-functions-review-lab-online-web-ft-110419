// Your code here
function wrapAdjective(string = "*") {
  return function (special) {
    let first = "You are"
    return console.log(`${first} ${string} ${special}`)
  }
  
}
