function reverseString(str) {

  var revString = "";
  for(var i = str.length; i > 0; i--){
    revString += str[i - 1];
  }

  return revString;
}

reverseString("hello");
