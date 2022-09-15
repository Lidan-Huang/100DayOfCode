"use strict";

/**
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a 
 * different word or phrase, typically using all the original letters exactly once.
 * 
 * constraints:
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 * 
 * test cases:
 * strs = ["eat","tea","tan","ate","nat","bat"] => [["bat"],["nat","tan"],["ate","eat","tea"]]
 * strs = [""] => [[""]]
 * strs = ["e"] => [["e"]]
 */

//solution1:runtime: o(n*m*k*logk)
function groupAnagrams1(strs) {
  let result = [[strs[0]]];

  for (let j = 1; j < strs.length; j++) {
    //if current string is an anagram of subarray in result, add current string
    //to subarray, else, create a new subarray and push it to the array
    for (let i = 0; i < result.length; i++) {
      if (isAnagram(strs[j], result[i][0])) {
        result[i].push(strs[j]);
        break;
      }
      if (i === result.length - 1) {
        result.push([strs[j]]);
        break;
      }
    }
  }

  return result;
};

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("")
}

//solution2:sorted each word of strs, make a hashtable to store the results, 
//loop through the sortedStrs, if the key is already in hash table, push the word
//in corresponding index of strs to hashtable's corresponding key's value(array),
//otherwise, make a new key-value pair and added to hashtable
//return all the values of the hash table
function groupAnagrams2(strs) {
  const sortedStrs = strs.map(word => word.split("").sort().join(""));

  let freq = {};

  for (let i = 0; i < sortedStrs.length; i++) {
    if (sortedStrs[i] in freq) {
      freq[sortedStrs[i]].push(strs[i]);
    } else {
      freq[sortedStrs[i]] = [strs[i]];
    }
  }

  return Object.values(freq);
};