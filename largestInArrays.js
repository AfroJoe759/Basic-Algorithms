function largestOfFour(arr) {
  var largestNumber = [];
  for(var i = 0; i < arr.length; i++){
    largestNumber.push(arr[i][0]);
      for(var j = 0; j < arr[i].length; j++){
        if(largestNumber[i] < arr[i][j]){
          largestNumber[i] = arr[i][j];
        }
    }
  }
  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
