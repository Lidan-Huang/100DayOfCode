"use strict";

/** accepts: two Linked Lists of potentially unequal length.
 *     - each Linked List represents a non-negative integer
 *     - first node in each Linked List always represents the least 
 *       significant digit of the integer
 * returns: the head of a new Linked List that represents the sum of the integers 
 *       represented by the two input Linked Lists.
 * 
 * the function must create and return a new Linked List
 * 
 * test case: 
 * linkedListOne = 2 -> 4 -> 7 -> 1  => 1742
 * linkedListTwo = 9 -> 4 -> 5  => 549
 * output: 1 -> 9 -> 2 -> 2  => 2291 = 1742 + 549
 * 
 * pseudo code:
 * make a new Linked List;
 * first points to linkedListOne head
 * second points to linkedListSecond head
 * add the same postion's node's value together if two nodes are not null
 *    - if the sum of this two nodes are big than 9, add one to next two nodes' sum
 *    - current position of new Linked List node value is the remainder of the sum
 *    - if the sum is less or equal to 9, just assign the value to the new LL node
 *    - first and second move to next node
 *    - new Linked List move to next node
 * return new Linked List
 */