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