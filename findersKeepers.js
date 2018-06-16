//Solution 1 - Iterative
function findElement(arr, func) {
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}

//Solution 2 - Using filter()
// function findElement(arr, func) {
//   //could combine both as one line - return arr.filter(func)
//   var filteredArray = arr.filter(func);
//
//   return filteredArray[0];
// }

findElement([1, 2, 3, 4], num => num % 2 === 0);
