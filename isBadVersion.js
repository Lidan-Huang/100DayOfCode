"use strict";

/**
 * accepts: an array of n versions[1, 2, ..., n]
 * returns: returns the first bad version that causes all the following ones to be bad
 * 
 * given an API bool isBadVersion(version), which returns whether version is bad
 * you should minimize the number of calls to the API
 * 
 * test case:
 * n = 5, bad = 4 => 4
 * n = 1, bad = 1 => 1
 * 
 * pseudocode:
 * loop through the array from 1 to end
 * once meet isBadVersion(i) is true, return i
 */

