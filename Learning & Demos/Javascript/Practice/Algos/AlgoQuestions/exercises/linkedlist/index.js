// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constuctor() {
        this.head = null;
    }
    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node
    }

}

module.exports = { Node, LinkedList };
