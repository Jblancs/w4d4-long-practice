
function reverseString(string) {
  // Your code here
  let newWord = ""
  for (let i = string.length - 1; i >= 0; i--) {
    newWord += string[i]
  }
  return newWord
};

module.exports = { reverseString }
