"use strict";

const res = require("express/lib/response");

/**Accepts: an array of unique integers
 * returns: an array of all permutations of those integers in no particular order
 * 
 * test case:
 * [] => []
 * [1] => [1]
 * [1, 2, 3] => [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2],  [3, 2, 1]]
 * 
 * 
 * pseudo case:
 * 
 */

function getPermutations(array) {
  if (array.length === 1) return [array];

  let result = []
  for (let i = 0; i < array.length; i++) {
    let newArr = [...array];
    newArr.splice(i, 1);
    let res = getPermutations(newArr);
    for (let j=0; j< res.length; j++) {
      res[j].unshift(array[i])
      result.push(res[j]);
    }
  }
  return result;
}