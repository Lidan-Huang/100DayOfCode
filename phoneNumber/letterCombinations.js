"use strict";

/**
 * Given a string, containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent, 
 * return the answer in any order
 * 
 * test cases:
 * digits = "23" => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * digits = "" => []
 * digits = "2" => ["a", "b", "c"]
 * 
 * constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9']
 */

//using recursion to solve the problem
function letterCombinations(digits) {
  const numToLetter = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]]);

  if (digits.length === 0) return []
  if (digits.length === 1) return numToLetter.get(digits);
  return helper(numToLetter.get(digits.slice(0, 1)), letterCombinations(digits.slice(1)))

};

function helper(arr1, arr2) {
  let results = [];
  for (let char1 of arr1) {
    for (let char2 of arr2) {
      results.push((char1 + char2));
    }
  }
  return results;
}
