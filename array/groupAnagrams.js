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