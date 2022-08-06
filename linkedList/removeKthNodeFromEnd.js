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

//solution two:
function removeKthNodeFromEnd(head, k) {
  //make sure second node and first node has n node's gap
  let count = 1;
  let first = head;
  let second = head;
  while (count <= k) {
    second = second.next;
    count++;
  }

  //the kth node is the head
  if (second.next === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  //second node is last node, and first node is right before removed node
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}


//solution three:
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  let first = dummy;

  //length means how many nodes before the deleted node
  length -= n;

  while (length > 0) {
    first = first.next;
    length--;
  }
  first.next = first.next.next;
  return dummy.next;

};