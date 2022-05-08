"use strict";

/**accepts: non-empty string
 * return run-length encoding string
 * 
 * test case:
 * 'AAAAAAAAAAAABBCCC" => 9A3A2B3C
 * '122233" => '113223'
 * 
 * pseudo code:
 * make a variable to store the result: str = "";
 * loop through the string and count the same character, after counting, check
 * whether the number is bigger than 9, if split the number
 *   add the count and the character to the variable str
 * 
 * return str
 */

function runLengthEncoding(string) {
  let result = [];
  let count = 1;

  for(let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const previousChar = string[i - 1];
    if (currentChar != previousChar || count === 9) {
      result.push(count.toString());
      result.push(previousChar);
      count = 0;
    }
    count++;
  }

  // handle the last check
  result.push(count.toString());
  result.push(string[string.length - 1]);

  return result.join('');
}