//Solution 1 - using substr() method
function confirmEnding(str, target) {
    if(str.substr(str.length - target.length, str.length - 1) == target){
      return true;
    }
    return false;
}

//Solution 2 - Ternary solution same logic as solution 1
// function confirmEnding(str, target) {
//     return str.substr(str.length - target.length, str.length - 1) == target ? true:false;
// }

confirmEnding("Bastian", "n");
