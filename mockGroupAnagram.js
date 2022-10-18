"use strict";

/**given an array of strs
 * return: group the str with anagrams
 * 
 * no special symbols, no space, just lowercase letter
 * 
 * test case:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * ["aet", "aet", 'ant","aet", "ant", "abt"]
 * [["eat", "tea"]]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * pseudocode:
 * 
 * "eat"=> array => sort this array => join to string
 * => "aet"
 * 
 */

function groupAnagram(strs) {
  let newStrs = [];
  let map = new Map();

  for(let str of strs) {
    let chars = str.split("");
    let word =  chars.sort().join("");
    newStrs.push(word);
  }

  console.log("newStrs:", newStrs);
  for (let i = 0; i < strs.length; i++) {
    if (map.has(newStrs[i])) {
      map.get(newStrs[i]).push(strs[i]);
    } else {
      let vals = [];
      vals.push(strs[i]);
      map.set(newStrs[i], vals);
    }
  }

  console.log("map:", map);
  let result = [];
  for (let key of map.keys()) {
    // console.log("val:*****", map.get(key));
    result.push(map.get(key));
    // console.log("result****:", result);
  }
  return result;
}

//["eat","tea","tan","ate","nat","bat"] {"aet": ["eat", "tea"], "ant":["tan"]}
//["aet", "aet", 'ant","aet", "ant", "abt"]

