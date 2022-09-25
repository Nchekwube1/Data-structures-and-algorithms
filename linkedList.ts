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
      let current = this.head;
      while (track !== index) {
        current = current.next;
        track++;
      }
      console.log("got herr");

      return current;
    }
  }
}

let list = new SinglyLinkedList();
const first = new SingleNode("asd");
list.push(first);
const second = new SingleNode("sec");
const third = new SingleNode("third");
list.push(second);
list.push(third);
// list.unShift("unshift");
console.log(list.get(-2));
