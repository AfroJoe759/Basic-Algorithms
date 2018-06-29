//Solution 1
function titleCase(str) {
  //seperates the array by spaces and stores into array
  let splitArr = str.toLowerCase().split(" ");

  //Makes the first letter of the string uppercase
  for(let i = 0; i < splitArr.length; i++){
    splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].substr(1);
  }

  //Joins each element in the array with a space between
  return splitArr.join(" ");
}

titleCase("I'm a little tea pot");
