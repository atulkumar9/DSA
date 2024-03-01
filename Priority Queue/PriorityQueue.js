/**
 * Priority Queue Lectures
 * https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu
 * From 14 - 18
 * Notes:-
 * 1. PQ is implemented with the help of heap as this gives the best time complexity
 *  we can use unsorted list as well for PQs but this won't give us the best time complexity
 * 2. There are many types of heap eg (Binary heap, fibonacci heap, bibnomial heap, pairing heap etc)
 * 3. Binary heap is a bbinary tree, that supports the heap invariant (max-heap or min-heap).
 *  Every node has exactly two children
 * 4. Complete binary tree - At every level except the last is completely filled, all nodes
 *  are as far as possible
 * 5. let i be the parent node index
 *  left child index - 2i + 1
 *  right child index - 2i + 2
 * (zero based)
 * 6. poll() - remove the root emelent - O(log(n))
 *    swap the root node with the last node of the heap
 *    bubble down the new root if it doesn't satisfy the heap invariant
 *    while bubbling down, swap this node with the child which has lesser value in case of min heap
 *    if both the children has equal value then swap it with the left node by default
 *    remove the last node now
 * 7. Remove(elem) - O(n) - Traverse to the elem node and swap it with the last node
 *    fix the tree by bubbling/backtracking to satisfy the heap  invariant
 *    i.e keep on swaping this node with its parent until the heap invariant is satisfied
 *    or if parent is less than the replaced child node then we need to check for bubbilng down
 *      prospects
 *    remove the last node now.
 * 8.  Better approach to remove - by the use of hashtable
 */

// Priority Queue - Min Heap
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  #heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let currentIndex = index;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex].priority > this.heap[currentIndex].priority) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  #heapifyDown() {
    let index = 0;
    while (index < this.heap.length) {
      let lchild = 2 * index + 1;
      let rchild = 2 * index + 2;
      if (lchild >= this.heap.length || rchild >= this.heap.length) {
        return;
      }
      let currentIndex = lchild;
      if (this.heap[lchild].priority > this.heap[rchild].priority) {
        currentIndex = rchild;
      }
      if (this.heap[index].priority > this.heap[currentIndex].priority) {
        [this.heap[index], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[index],
        ];
        index = currentIndex;
      } else {
        break;
      }
    }
  }

  enque(node, priority) {
    this.heap.push({ node, priority });
    this.#heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }
    let dequedNode = this.heap[0];
    let lastNode = this.heap.pop();
    this.heap[0] = lastNode;
    this.#heapifyDown();
    return dequedNode.node;
  }

  printHeap() {
    return this.heap;
  }
}

let pq = new PriorityQueue();
pq.enque("a", 1);
pq.enque("b", 5);
pq.enque("c", 1);
pq.enque("d", 8);
pq.enque("e", 6);
pq.enque("f", 2);
pq.enque("g", 2);
pq.enque("h", 13);
pq.enque("i", 12);
pq.enque("j", 11);
pq.enque("k", 7);
pq.enque("l", 2);
pq.enque("m", 15);
pq.enque("n", 3);
pq.enque("o", 10);

console.log(pq.printHeap());

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

console.log(pq.printHeap());

/**
 * Time Complexity-
 * Insertion (enque) - O(logN)
 * Removal (deque) - O(logN)
 */
