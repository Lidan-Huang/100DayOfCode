"use strict";

/** input: - non-empty array of distinct integers
 *         - an integer representing a target sum
 * return: an array: with two numbers that sum up to the target sum, in any order
 * otherwise, return an empty array
 * 
 * test case: 
 * [1, 2, 3, 4, 5], 7 => [3, 4]
 * [1, 3, 2, 4, 5], 10 => []
 * 
 */

//runtime: o(n^2)
function twoNumberSum(array, targetSum) {
  let results = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        results.push(array[i], array[j]);
      }
    }
  }
  return results;
}


//runtime: O(n) | O(n) space
function twoNumberSum1(array, targetSum) {
  let results = {};
	
  for (let num of array) {
    let match = targetSum - num;
    if (match in results) {
      return [match, num];
    } else {
      results[num] = true;
    }
  }
	return [];
}


//runtime: O(nlogn) | O(1) space
function twoNumberSum2(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		let currentSum = array[left] + array[right];
		if (currentSum === targetSum) {
			return [array[left], array[right]];
		} else if (currentSum > targetSum) {
			right--;
		} else {
			left ++;
		}
	}
	return [];
}