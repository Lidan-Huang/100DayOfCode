"use strict";

/**accepts: a head of a Singly Linked List and an integer k
 * remove the kth node from the end of the list, the removal should be done in place
 * the input head of the linked list should remain the head of the linked list after
 * the removal is done, if the head is the node to be removed, the function should
 * simply mutate its value and next pointer
 * returns: function doesn't need to return anything
 * Assume: the input linked list always have at least k nodes
 * each LinkedList node has an integer value and next node pointing to the next node
 * in the list or to None/null if it's the tail of the list\
 * 
 * test case:
 * head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, k = 4;
 * output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
 * 
 * pseudo code:
 * loop through the LinkedList to find the tail, then count back to kth position,
 * remove the Kth node from the LinkedList, here need to check whether Kth node
 * is the head node or not
 */

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//solution one:
function removeKthNodeFromEnd(head, k) {
  let current = head;
  let nodeCounts = 0;
  //count all the nodes of the SLL
  while (current !== null) {
    current = current.next;
    nodeCounts++;
  }
  console.log("nodeCounts:", nodeCounts);

  let positionOfRemovedNode = nodeCounts - k + 1;
  let nodesBeforeKth = 1;
  current = head;

  // if the removed node is not the first head
  if (positionOfRemovedNode !== 1) {
    while ((positionOfRemovedNode - nodesBeforeKth) > 1) {
      current = current.next;
      nodesBeforeKth++;
    }
    current.next = current.next.next;
  } else {   
    // head is the node that is removed, so mutate head to the head.next
    head.value = head.next.value;
    head.next = head.next.next;
  }
}