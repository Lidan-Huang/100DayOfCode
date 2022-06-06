"use strict";

/**accepts: a string
 * returns: longest palindromic substring
 * 
 * test case:
 * "abaxyzzyxf" => "xyzzyx"
 * "a" => "a"
 * "aca" => "aca"
 * 
 * pseudocode:
 * make a variable to store the longest substring palindrome indice(start and end)
 * initial value is the first letter[0, 1]
 * loop through the string from index 1
 *  check two conditions: odd position("aba") or even position("aa")
 *  let currentLongest is the longer one from odd and even
 *  compare longest and currentLongest, if currentLongest is longer, assign its
 *  value to longest, keep updating
 * return longest
 */

function longestPalindromicSubstring(string) {
  // Write your code here.
  let longest = [0, 1];

  for (let i = 1; i < string.length; i++) {
    let oddPal = getSubStringPalindrome(string, i - 1, i + 1);
    let evenPal = getSubStringPalindrome(string, i - 1, i);
    let currentLongest;
    //assign longer palindrome between oddPal and evenPal to currentLongest
    if ((oddPal[1] - oddPal[0]) > (evenPal[1] - evenPal[0])) {
      currentLongest = oddPal;
    } else {
      currentLongest = evenPal;
    }
    //keep updating longest value
    if ((currentLongest[1] - currentLongest[0]) > (longest[1] - longest[0])) {
      longest = currentLongest;
    }
  }
  return string.slice(longest[0], longest[1]);
}


function getSubStringPalindrome(str, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] === str[rightIdx]) {
      leftIdx--;
      rightIdx++;
    } else {
      break;
    }
  }
  //leftIdx is the index for break, so the actual palindrome leftIdx should plus 1
  return [leftIdx + 1, rightIdx];
}