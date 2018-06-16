//Solution 1
function chunkArrayInGroups(arr, size) {
  let slicedArray = [];
  for(var i = 0; i < arr.length; i+= size){
    slicedArray.push(arr.slice(i, i + size));
  }
  return slicedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
