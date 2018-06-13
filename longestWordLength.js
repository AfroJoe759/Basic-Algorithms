function findLongestWordLength(str) {
  var words = str.split(" ");
  var longestWord = str[0];
    for(var i = 0; i < words.length - 1; i++){
      if(longestWord.length < words[i + 1].length){
        longestWord = words[i + 1];
      }
    }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
