//Solution 1
function truncateString(str, num) {
  if(num >= str.length){
    return str;
  }
  return(str.slice(0, num) + "...");
}

//Solution 2 - Ternary Operators (logically equivilent to Solution 1)
// function truncateString(str, num) {
//   return num >= str.length ? str:str.slice(0, num) + "...";
// }

truncateString("A-tisket a-tasket A green and yellow basket", 8);
