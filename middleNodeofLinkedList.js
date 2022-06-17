"use strict";

/**accepts: the head of a singly linked list
 * returns: the middle node of the linked list, if there are two middle nodes, 
 * return the second middle node
 * 
 * test cases:
 * head = [1, 2, 3, 4, 5] => [3, 4, 5]
 * head = [1, 2, 3, 4, 5, 6] => [4, 5, 6]
 * 
 * pseudocode:
 * loop through the linked list and count the number of nodes
 * the middle node should be Math.floor(count / 2) + 1
 * find the middle node according to the number, and return the middle node
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0: val);
  this.next = (next === undefined ? 0: next);
}
//runtime: O(n) | space: O(1)
function middleNode(head) {
  let currentNode = head;
  let count = 0;
  //count the node numbers of the linked list
  while (currentNode !== null) {
    count++;
    currentNode = currentNode.next;
  }

  const middle = Math.floor(count / 2) + 1;
  let currentCount = 1;
  while (currentCount < middle) {
    head = head.next;
    currentCount++;
  }
  return head;
}


//using slow and fast pointers
function middleNode2(head) {
  let fast = head;
  let slow = head; 

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}