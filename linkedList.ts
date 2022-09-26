// A link list a a connected list with nodes pointing to one another, they are not indexed. The first step to creating
// a linked list is to create a node class

class SingleNode {
  next: null | any;
  val: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: null | any;
  private tail: null | any;
  private length: number = 0;

  // Add a node to the end of the list
  push(val: any) {
    let newNode = new SingleNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Remove a node from the end of the list

  pop() {
    if (this.length === 0) return undefined;
    else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
        this.tail = newTail;
        this.tail.next = null;
      }
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current.val;
    }
  }
  // Remove a node from the beginnning of the list
  shift() {
    if (this.length === 0) return undefined;
    else {
      let current = this.head;
      this.head = current.next;
      current.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return current.val;
    }
  }

  //Add a node to the beginnning of the list
  unShift(val: any) {
    let newNode = new SingleNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /// Retreiving a node by its position in the linked list
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    else {
      let track = 0;
      let current: SingleNode | null = this.head;
      while (track !== index) {
        current = current?.next;
        track++;
      }
      return current;
    }
  }

  // Changing the value of a node based on its position on the linked list

  set(index: number, node: SingleNode) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = node;
      return true;
    } else {
      return false;
    }
  }

  //Inserting a mode at a specific index
  insert(index: number, node: any) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(node);
      return true;
    }
    if (index === 0) {
      this.unShift(node);
      return true;
    }
    let newNode = new SingleNode(node);
    let holder = this.get(index - 1)!!;

    newNode.next = holder.next;
    holder.next = newNode;
    this.length++;
    return true;
  }

  // Removing a node at a specific index
  remove(index: number) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let holder = this.get(index - 1)!!;
    let tbr = holder.next;
    holder.next = tbr.next;
    this.length--;
    return tbr;
  }

  // Reverse a linked list in place
  reverse() {}
}

let list = new SinglyLinkedList();
const first = new SingleNode("asd");
list.push(first);
const second = new SingleNode("sec");
const third = new SingleNode("third");
list.push(second);
list.push(third);
// list.insert(1, "unshift");
console.log(list.remove(2));
console.log(list.remove(1));
console.log(list);
