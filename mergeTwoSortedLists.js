"use strict";

/**accepts: the heads of two sorted linked lists, list1 and list2
 * merge the two lists in a one sorted list
 * return the head of the merged linked list
 * 
 * test case:
 * list1 = [], list2 = [] => []
 * list1 = [], list2 = [0] => [0]
 * list1 = [1, 2, 4], list2 = [1, 3, 4] => [1, 1, 2, 3, 4, 4]
 * 
 * pseudo code:
 * make a new linked list
 * check two lists first, if two lists are empty, just return, if one is empty, return another one
 * two pointers separately points two lists, and compare their value until to end
 * return head of merged linked list
 */

