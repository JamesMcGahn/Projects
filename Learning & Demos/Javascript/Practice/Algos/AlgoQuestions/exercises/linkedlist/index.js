// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next
        }
    }

    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }

        let node = this.head.next;
        let prev = this.head;

        while (node.next) {
            prev = node
            node = node.next;
        }
        prev.next = null
    }

    insertLast(data) {
        const last = this.getLast();
        last ? last.next = new Node(data, null) : this.head = new Node(data, null);
    }

    getAt(index) {
        let counter = 0
        let node = this.head;
        while (node && counter !== index) {
            counter++
            node = node.next;
        }
        return node
    }

    removeAt(index) {
        if (!this.head) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        const prev = this.getAt(index - 1)
        if (!prev || !prev.next) return
        prev.next = prev.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data, null)
            return
        }
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }
        const prev = this.getAt(index - 1) || this.getLast()
        prev.next = new Node(data, prev.next)
    }

    forEach(fn) {
        if (!this.head) {
            return fn(null);
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                fn(node);
                return
            }
            fn(node)
            node = node.next;
        }

    }

}

module.exports = { Node, LinkedList };
