class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    newNode.previous = this.head;
    this.tail = newNode;
    this.length++;
  }

  preppend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.preppend(value);
    }

    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const pointerHolder = leaderNode.next;

    leaderNode.next = newNode;
    newNode.previous = leaderNode;
    newNode.next = pointerHolder;
    this.length++;
  }

  remove(index) {
    let leaderNode;
    if (index > 0) {
      leaderNode = this.traverseToIndex(index - 1);
      console.log(leaderNode.value);
      leaderNode.next.previous = leaderNode;
      leaderNode.next = leaderNode.next.next;

    } else {
      leaderNode = this.head;
      leaderNode.next.previous = null;
      this.head = leaderNode.next;
      leaderNode.next = null;
    }
    this.length--;
  }

  traverseToIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const dls = new DoublyLinkedList(10);
dls.append(5);
dls.preppend(1);
dls.append(16);
dls.remove(3);
dls.remove(2);

console.log(dls.printList());
console.log();
