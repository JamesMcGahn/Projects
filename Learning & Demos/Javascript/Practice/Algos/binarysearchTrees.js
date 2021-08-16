class BinarySearch {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insert(value) {
        if (value <= this.value) {
            if (!this.left) this.left = new BinarySearch(value)
            else {
                this.left.insert(value)
            }
        }
        if (value > this.value) {
            if (!this.right) this.right = new BinarySearch(value)
            else {
                this.right.insert(value)
            }
        }
    }

    contains(value) {
        if (value === this.value) return true;
        else if (value < this.value) {
            if (!this.left) return false
            else return this.left.contains(value)
        }
        else if (value > this.value) {
            if (!this.right) return false
            else return this.right.contains(value)
        }
    }

    depthFirstTraverse(fn, order) {
        if (order === 'pre-order') fn(this.value)
        if (this.left) this.left.depthFirstTraverse(fn, order)
        if (order === 'in-order') fn(this.value)
        if (this.right) this.right.depthFirstTraverse(fn, order)
        if (order === 'post-order') fn(this.value)
    }

    breadthFirstTraverse(fn) {
        let queue = [this]
        while (queue.length) {
            let node = queue.shift()
            fn(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

    }

    getMin() {
        if (this.left) return this.left.getMin()
        else return this.value
    }

    getMax() {
        if (this.right) return this.right.getMax()
        else return this.value
    }

}

const bst = new BinarySearch(50)
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)


function log(node) {
    console.log(node.value)
}


console.log(bst.getMin())
console.log(bst.getMax())