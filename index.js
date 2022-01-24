function isPalindrome(word) {
  let i = 0
  const wordArray = []
  do{
    wordArray.unshift(word[i])
    i++
  }while (i != word.length)
 const reverse = wordArray.join('')
 
 console.log(word)
 console.log(reverse)
 return (word.toUpperCase() === reverse.toUpperCase())
}

/* 
  Add your pseudocode here
*/
//??????????
/*
  Add written explanation of your solution here
*/
// Word is passed to isPalindrome(), then an empty array is declared. Using a do...while loop, the word is unshifted to the empty array.
// The empty array now contains the letters of the original word in reverse.
// The array is then converted back to a string, and the new string is then compared to the original word in a boolean statement

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
