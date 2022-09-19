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
      return current.val;
    }
  }
}

let list = new SinglyLinkedList();
const first = new SingleNode("asd");
list.push(first);
// console.log({ list });
const second = new SingleNode("sec");
list.push(second);
console.log(list.pop());
console.log(list);
