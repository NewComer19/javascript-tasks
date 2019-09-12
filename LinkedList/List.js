const Node = require("./LinkedList/Node.js")

class LinkedList {
  constructor(){
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  put(element) {
    let node = new Node(element);

    if(this._length == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this._length++;
    return this;

  }

  get(index) {
    let currentNode = this.head,
        counter = 0;

    if(this._length != 0 && index >= 0 && index < this._length) {
      while(counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      throw "Error, index out of bounds"
    }

    return currentNode;
  }

  delete(index) {
    let currentNode = this.head,
      counter = 0;
    if(this._length == 0 || index < 0 || index > this._length) {
      throw "Error, empty list of indexOutOfBounds";
    }

    if(index == 0) {
      this.head = currentNode.next;
      this.head.previous = null;
    } else if (index == this._length) {
      this.tail = this.tail.previous
      this.tail.next = null;
    } else {
      while(counter < index) {
        currentNode = currentNode.next;
        counter++;
      }

      let nodeBefore = currentNode.previous;
      let nodeAfter = currentNode.next;

      nodeBefore.next = nodeAfter;
      nodeAfter.previous = nodeBefore;

      currentNode = null;
    }

    this._length--;

    return this;
  }

  indexOf(element) {
    let currentNode = this.head,
      counter = 0;
    while(counter < this._length) {
      if(element == currentNode.element) {
        return counter;
      } else {
        currentNode = currentNode.next
      }
      // console.log(currentNode.element)
      if(counter == this._length) {
        throw "No such elemend is list";
      }
      counter++;
    }

  }

  size() {
    return this._length;
  }

}

let ls = new LinkedList();

console.log(ls.put(5).put(8).put(15));
console.log(ls.get(0));
console.log(ls.delete(1));
console.log(ls.indexOf(15));
