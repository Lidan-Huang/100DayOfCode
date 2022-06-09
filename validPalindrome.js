"use strict";

/**accepts a string, contains alphabets, numbers and non-alphanumeric characters
 * only consider the alphanumeric characters and ignoring cases;
 * returns: true, if it is palindrome, otherwise return false
 * 
 * test case:
 *  s = "A man, a plan, a canal: Panama" => true
 *  s = "race a car" => false
 *  s = " " => true
 * 
 * pseudocode:
 * make a variable to hold all the lowercase letters and numbers
 * make two pointers, left from 0, and right from the end of the string
 * while left is smaller than right
 *    if left character is not an alphanumeric and left less than right, left++
 *    if right character is not an alphanumeric and left less than right, right--
 *    check left character(toLowerCase) with right character(toLowerCase), 
 *        if they are not equal, return false
 *        else left++, right--
 * return true
 */

//runtime: O(n) | space: O(1)
function validPalindrome(s) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!alphanumeric.includes(s[left].toLowerCase()) && left < right) left++;
    while (!alphanumeric.includes(s[right].toLowerCase()) && left < right) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}