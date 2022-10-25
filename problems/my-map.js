function myMap(inputArray, callback) {
  
  let newArr = [];
  inputArray.forEach(num => {
    newArr.push(callback(num));
  })
  return newArr;
}


//   let newArr = inputArray.map(num => {
//     return callback(num);
//   })
//   return newArr;
// }


module.exports = myMap;
