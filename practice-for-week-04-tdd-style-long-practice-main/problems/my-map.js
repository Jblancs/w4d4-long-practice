function myMap(inputArray, callback) {
  // Your code here
  let newArray = [];
  for (let value of inputArray) {
    let map = callback(value);
    newArray.push(map)
  }
  return newArray
}

module.exports = {myMap};
