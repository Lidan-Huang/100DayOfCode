"use strict";

/**Accepts the head of a singly linked list
 * Return: true if it is a palindrome, else return false
 * 
 * constraints: 
 *   The number of nodes in the list is in the range [1, 10^5].
 *   0 <= Node.val <= 9
 *   Runtime: O(n), space: O(1)
 * 
 * test case:
 * head = [1,2,2,1] => true
 * head = [1,2] => false
 */

function isPalindrom(head) {
  let slow = head;
  let fast = head;

  //make sure slow goes to the middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }

  //reverse the latter half of the linked list
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  //check whether the first half and the reversed second half are the same
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}