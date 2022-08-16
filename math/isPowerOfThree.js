"use strict";


/**Given an integer n
 * return true if it is a power of three. Otherwise, return false.
 * 
 * An integer n is a power of three, if there exists an integer x such that n == 3^x.
 * 
 * test case:
 * n = 27 => true
 * n = 0 => false
 * n = 9 => true
 * 
 * pseudocode:
 * if n is even number or less than 1, return false
 * while (n >= 3):
 *    if n is not the multiple of 3,  return false
 *    else update n = n / 3
 * if n is equal 1, return true
 */

