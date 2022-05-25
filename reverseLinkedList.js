"use strict";

/**
 * accepts: the head of a singly linked list, reverse the list
 * returns: the reversed list
 * 
 * test case:
 * head = 1 -> 2 -> 3 -> 4 -> 5  => 5 -> 4 -> 3 -> 2 -> 1
 * head = [] => []
 * head = 1 -> 2 => 2 -> 1
 * 
 * pseudo code:
 * if head is null, return head directly;
 * traverse the singly linked list and store each node's value to an array
 * loop through the array from the end to start, and reassign the value to the 
 * node from head to tail
 * return reversed linked list's head
 */

/** definition for the singly linked list */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
  let values = [];
  let currentNode = head;
  if (currentNode === null) return head;
  while (currentNode !== null) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

  currentNode = head;
  while (values.length > 0) {
    const value = values.pop();
    currentNode.val = value;
    currentNode = currentNode.next;
  }

  return head;
};