"use strict";

/**Doubly Linked List Construction:
 * write a DoublyLinkedList class that has a head and a tail, both of which point to either
 * a linked list Node or <None>/null
 * The class should support:
 *  - setting the head and tail of the linked list
 *  - inserting nodes before and after other nodes as well as at given positions(
 * the position of the head node is 1)
 *  - removing given nodes and removing nodes with given values
 *  - searching for nodes with given values
 *  
 * Note: setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in 
 * actual Nodes as input parameters, not integers(except for insertAtPosition, 
 * which will takes in an integer representing the position)
 * 
 * You don't need to create any new Nodes in these methods
 * the input nodes can be either stand-alone nodes or nodes that are already in the linked list, the code
 * has to defensively handle this scenario.
 * 
 * Each node has an integer value as well as a prev node and a next node, both of which
 * can point to either another node or None/null.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    //Write your code here.
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    node.next = nodeToInsert;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    nodeToInsert.prev = node;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;
    while (currentNode !== null && currentPosition++ !== position) {
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      insertBefore(currentNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }

  }

  removeNodesWithValue(value) {
    // Write your code here.
    let currentNode = this.head;
    while (currentNode !== null) {
      let nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    // Write your code here.
    if (node === this.head) {
      this.head = this.head.next;
      node.next === null;
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      node.prev === null
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}