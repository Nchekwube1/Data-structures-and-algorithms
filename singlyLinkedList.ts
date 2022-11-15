// A linked list consists of elements with no indicees who are just pointing to the next element. Linked lists consists of nodes and each
// node has a value and a pointer to another node or null to signify the end of the singly linked list
// Each node is only connected one directionally to the next node
// You cannot randomly access a value in the linked list, you have to traverse the list as there is no index

// -- Step One: create node class which takes a value and initialises the value and sets the next property to default to null

class NodeClass {
  value: any;
  next: null | any;
  constructor(val: any) {
    (this.value = val), (this.next = null);
  }
}

// -- Step two: create the SinglyLinkedList class to setup the singly linked list flow
// initialise the linked list with a pointer to the head , tail and length of the linked list

class SinglyLinkedListClass {
  private length: number = 0;
  private head: null | NodeClass = null;
  private tail: null | NodeClass = null;
  constructor() {}
  // The push method takes a value and pushes to the end of the list making it the new tail, also makes it the new head if its the first
  //value being assigned
  push(node: any) {
    //pseudocode: 1. accept a value and create a new node with the value passed
    const newNode = new NodeClass(node);
    //2. If the head is null, set the head and tail of the linked list to point to the new value passed and increment the length property by one
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // otherwise set the next property on the current tail to be the new value and set the new tail as the new value and increment the length property by one
    else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
    return this;
  }
}
