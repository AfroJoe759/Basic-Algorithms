//Solution 1
function frankenSplice(arr1, arr2, n) {
  var newArr = arr2.slice(0, n);

  return newArr.concat(arr1).concat(arr2.slice(n,));
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
