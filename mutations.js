//Solution 1 - Iteration (Brute Force)
function mutation(arr) {
  arr[1] = arr[1].toLowerCase();
  arr[0] = arr[0].toLowerCase();
  for(let i = 0; i < arr[1].length; i++){
    let flag = false;
    for(let j = 0; j < arr[0].length; j++){
      if(arr[0][j] === arr[1][i]){
        flag = true;
        break;
      }
    }
    if(flag === false){
      return false;
    }
  }
  return true;
}

//Solution 2 - Iterative (Using indexOf)
function mutation(arr) {
  arr[1] = arr[1].toLowerCase();
  arr[0] = arr[0].toLowerCase();
  for(let i = 0; i < arr[1].length; i++){
    if(arr[0].indexOf(arr[1][i]) === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
