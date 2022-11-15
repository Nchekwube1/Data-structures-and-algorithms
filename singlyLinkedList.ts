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

// -- Step two: create the SinglyLinkesList class to setup the singly linked list flow
