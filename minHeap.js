class MinHeap {
	constructor() {
		this.heap = [null];
	}

	insert(num) {
		let heap = this.heap;
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			let parent = Math.floor(idx / 2);
			while (heap[idx] < heap[parent]) {
				if (idx >= 1) {
					[heap[idx], heap[parent]] = [heap[parent], heap[idx]];
					if (idx > 1) {
						idx = parent;
					}
				} else {
					break;
				}
			}
		}
	}

	remove() {
		let heap = this.heap;
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length === 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				}
				return smallest;
			}

			let i = 1;
			let left = i * 2;
			let right = i * 2 + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = i * 2;
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = i * 2 + 1;
				}
				left = i * 2;
				right = i * 2 + 1;
				if (heap[left] === undefined || heap[right] === undefined) {
					break;
				}
			}
		} else if (heap.length === 2) {
			heap.splice(1, 1);
		} else {
			return null;
		}
		return smallest;
	}
}

let heapVar = new MinHeap();

heapVar.insert(3);
heapVar.insert(7);
heapVar.insert(6);
heapVar.remove();

console.log(heapVar);
