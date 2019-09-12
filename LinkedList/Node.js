class Node {
  constructor(element, next = null, previous = null) {
    this.element = element;
    this.next = next;
    this.previous = previous;
  }
}

module.exports = Node;
