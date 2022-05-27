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

function ListNode(val, next) {
  this.val = this.val === undefined ? 0 : val;
  this.next = this.next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  let prevHead = new ListNode(0);
  //make a dummy node
  let prevNode = prevHead;
  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      prevNode.next = current1;
      current1 = current1.next;
    } else {
      prevNode.next = current2;
      current2 = current2.next;
    }

    prevNode = prevNode.next;
  }

  prevNode.next = current1 === null ? current2 : current1;

  return prevHead.next;
};