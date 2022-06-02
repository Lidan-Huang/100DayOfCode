"use strict";

/**
 * accepts: a string, containing just the characters '(', ')', '{', '}', '[' and ']'
 * returns: true, if the string is valid; otherwise, return false
 * 
 * valid string: 
 *  - open brackets must be closed by the same type of brackets
 *  - open brackets must be closed in the correct order
 * 
 * test cases:
 * "()" => true
 * "()[]{}" => true
 * "(]" => false
 * "()[" => false
 * 
 * pseudo code:
 * make a stack
 * make openSet, and store the openings to the set
 * make closeMap, and store the closings to the map
 * loop through the string, if it is an opening, push it to the stack
 *  if it is an closing, comparing it with the top one of the stack, if they are
 *  not a pair, return false, else continue
 * 
 * return true
 */

