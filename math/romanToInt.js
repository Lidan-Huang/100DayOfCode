"use strict";

/**Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 * 
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
 */

/**test case:
 * s = "III" => 3
 * s = "LVIII" => 58
 * s = "MCMXCIV" => 1994
 */


function romanToInt(s) {
  const symbolValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let right = s[s.length - 1];
  let num = symbolValue[right];

  //If left symbol value is bigger than right's value, keep adding value to num,
  //and update right symbol; if left symbol value less than right's value, subtract
  //left symbol value from num 
  for (let i = s.length - 2; i >= 0; i--) {
    if (symbolValue[s[i]] >= symbolValue[right]) {
      num += symbolValue[s[i]];
      right = s[i];
    } else {
      num -= symbolValue[s[i]];
    }

  }
  return num;
}