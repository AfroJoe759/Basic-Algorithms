//Solution 1 - Recursive
function factorialize(num) {
  if(num < 0){
    return -1;
  }

  if(num == 0){
    return 1;
  }
  return num * factorialize(num - 1);
}

//Solution 2- Iterative
// function factorialize(num) {
//   var product = 1;
//   for(var i = 1; i <= num; i++){
//     product *= i;
//   }
//   return product;
// }

factorialize(5);
