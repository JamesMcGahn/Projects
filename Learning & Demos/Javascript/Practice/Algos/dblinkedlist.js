class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const node = new Node(data, this.head, null)
    if (this.head) {
      this.head.prev = node
    } else {
      this.tail = node
    }
    this.head = node
  }

  addToTail(data) {
    const node = new Node(data, null, this.tail)
    if (this.tail) {
      this.tail.next = node
    } else {
      this.head = node
    }
    this.tail = node
  }

  removeHead() {
    if (!this.head) return null
    const oldHead = this.head
    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return oldHead
  }

  removeTail() {
    if (!this.tail) return null
    const oldTail = this.tail
    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.tail = null
    return oldTail
  }

  search(searchVal) {
    let node = this.head
    while (node) {
      if (node.value === searchVal) return node
      node = node.next
    }
    return null
  }

  indexOf(searchVal) {
    let node = this.head
    let results = []
    let currentIndex = 0
    while (node) {
      if (node.value === searchVal) results.push(currentIndex)
      node = node.next
      currentIndex++
    }
    return results.length > 0 ? results : null
  }

}

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const list = new LinkedList()
list.addToHead(300)
list.addToHead(100)
list.addToHead(200)
list.addToHead(300)
list.addToTail(500)
console.log(list.indexOf(500))