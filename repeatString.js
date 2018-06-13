//Solution 1 - Iterative
function repeatStringNumTimes(str, num) {
  var repeatString = "";
  for(var i = 0; i < num; i++){
    repeatString += str;
  }
  console.log(repeatString);
  return repeatString;
}

//Solution 2 - Recursive
// function repeatStringNumTimes(str, num) {
//   if(num < 1){
//     return "";
//   }
//
//   return str + repeatStringNumTimes(str, num - 1);
// }

repeatStringNumTimes("abc", 3);
