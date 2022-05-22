"use strict";

/**accepts: the head of a Singly Linked List whose nodes are in sorted order 
 * with respect to their values
 * returns: a modified version of the Linked List that doesn't contain any nodes
 * with duplicate values
 * the Linked List should be modified in place, and the modified Linked List should
 * still have its nodes sorted with respect to their values
 * 
 * each node has an integer value as well as a next node pointing to the next node in
 * the list of to None/null if it's the tail of the list
 * 
 * test case: 
 * linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1
 * output: 1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1
 * 
 * pseudo code:
 * if head is null; return the empty Linked List
 * loop through the Linked List, let current equal to head, if next node of current node's value
 * is the same with current node's value, remove next node, let current node point to next next node
 * and continue this operation until to the end of the List
 * return the modified Linked List
 */

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;

  while (current !== null & current.next !== null) {
    if (current.next.value === current.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return linkedList;
}