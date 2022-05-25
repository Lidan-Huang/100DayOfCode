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

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


//solution one:
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let linkedListSum = new LinkedList(0);
  let currentNode = linkedListSum
  let first = linkedListOne;
  let second = linkedListTwo;
  let div = 0;
  while (first !== null && second !== null) {
    let sum = first.value + second.value + div;
    let newValue = sum % 10;
    let newNode = new LinkedList(newValue)
    currentNode.next = newNode;
    currentNode = newNode;

    div = Math.floor(sum / 10);
    first = first.next;
    second = second.next;
  }

  while (first === null && second !== null) {
    let sum = second.value + div;
    let newValue = sum % 10;
    let newNode = new LinkedList(newValue)
    currentNode.next = newNode;
    currentNode = newNode;
    div = Math.floor(sum / 10);
    second = second.next;
  }

  while (second === null && first !== null) {
    let sum = first.value + div;
    let newValue = sum % 10;
    let newNode = new LinkedList(newValue)
    currentNode.next = newNode;
    currentNode = newNode;

    div = Math.floor(sum / 10);
    first = first.next;
  }
  if (second === null && first === null && div !== 0) {
    let newNode = new LinkedList(div);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return linkedListSum.next;
}

//solution two:
function sumOfLinkedLists2(linkedListOne, linkedListTwo) {
  // make a dummy node: linkedListSum
  let linkedListSum = new LinkedList(0);
  let currentNode = linkedListSum;

  //if firstValue is 5, secondValue is 7, div should be 1
  let div = 0;
  let first = linkedListOne;
  let second = linkedListTwo;

  while (first !== null || second !== null || div !== 0) {
    const firstValue = first !== null ? first.value : 0;
    const secondValue = second !== null ? second.value : 0;
    const sum = firstValue + secondValue + div;

    //newValue will be the value added to the newNode
    let newValue = sum % 10;
    let newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    //update div and first node and second node
    div = Math.floor(sum / 10);
    first = first !== null ? first.next : null;
    second = second !== null ? second.next : null;
  }
  // as linkedlistSum is dummy node, so we need to return its next node as head node
  return linkedListSum.next;
}