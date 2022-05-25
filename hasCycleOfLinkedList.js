"use strict";

/**
 * accepts: the head of a linked list
 * returns: true if the linked list has a cycle in it; otherwise, return false
 * 
 * test case:
 * head = [3, 2, 0, -4], pos = 1; => true
 * head = [1, 2], pos = 0 => true
 * head = [1] pos = -1; => false;
 * 
 * pseudo code:
 * make a hashtable to store the nodes;
 * loop through the linked list, if the node already exist in hashtable, means it has
 * cycle, and return true
 * return false
 * 
 * pseudo code 2:
 * make two pointers: fast and slow, fast moves two steps each time, and slow moves
 * only one step, if fast or fast.next never reach null, and fast and slow nodes appeasrs 
 * in the same position, return true
 * return false
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}


//runtime: O(n) | space complexity: O(n), n is the nodes of linked list
function hasCycleOfLinkedList(head) {
  let nodes = new Set();
  let currentNode = head;

  while (currentNode !== null) {
    if (nodes.has(currentNode)) return true;
    nodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return false;
};