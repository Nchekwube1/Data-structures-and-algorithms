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

  // The pop method removes the last item from the list and returns it, while deecrementing the length of the list
  pop() {
    // If there are no nodes in the list return undefined
    if (this.length === 0) return undefined;
    // else, traverse through the list and set the second to last node's next property to null
    // return the last node and decrement the length of the linked list
    else {
      let current = this.head;
      let prev = current;
      while (current?.next) {
        prev = current;
        current = current.next;
      }
      this.tail = prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  // Remove a node from the beginning of the linked list and decrease the length of the list
  shift() {
    if (this.length === 0) return undefined;
    else {
      let current = this.head;
      let nextNode = this.head?.next;
      if (this.head) {
        this.head = nextNode;
      }
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return current;
    }
  }

  // Add a node to the beginning of the linked list and increse the length of the list
  unshift(val: any) {
    if (!this.head) {
      return this.push(val);
    } else {
      let newHead = new NodeClass(val);
      let oldHead = this.head;
      this.head = newHead;
      this.head.next = oldHead;
      this.length++;
      return this;
    }
  }

  // Retrieve a node at certain "index" in the list
  get(index: number) {
    // if the index passed is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    // loop through the list starting from zero until you reach the node at the specific
    // index -1 because its a zero based index access and return that node
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current?.next;
      count++;
    }
    return current;
  }
  // Set a node at certain "index" in the list
  set(value: any, index: number) {
    // first get the current node at the specificied index
    let foundNode = this.get(index);
    // if a node exists at that index, override the value property o the node to the new value passed
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // Insert a new node at a specified index
  insert(value: any, index: number) {
    // if the index is less than zero or greater than the length of the list return false
    if (index < 0 || index > this.length) {
      return false;
    }

    // if the index is equal to the length of the list that just signifies a push method so we can utilise our previously
    // defined push method
    if (index === this.length) {
      return !!this.push(value);
    }
    // if the index is zero, we can use the unshift method to insert at the beginning
    if (index === 0) {
      return !!this.unshift(value);
    }
    // Else perform logic which inserts at any other index
    // use the get method to access the node at the index -1 position
    let previousNode = this.get(index - 1);
    let nextNode = previousNode?.next;
    let newNode = new NodeClass(value);
    if (previousNode) {
      previousNode.next = newNode;
    }
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let currentNode = this.get(index);
    let nextNode = currentNode?.next;
    if (prevNode?.next) {
      prevNode.next = nextNode;
    }
    this.length--;
    return currentNode;
  }
}

const singleList = new SinglyLinkedListClass();
singleList.push("Here");
singleList.push("We");
singleList.push("go");
singleList.push("biatch");

console.log(singleList.remove(1));

console.log(singleList);
