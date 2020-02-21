class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new LinkedList();
list.push(5);
list.push(50);
list.push(500);
list.pop();
list.shift();
list.unshift("hello");
console.log(list);



//adding singly linked list class 

class Node{
  constructor(val){
    this.val = val;
    this.next = null
  }
}


class LinkedList{
  constructor(){
    this.head = null
  }

  push(val){
    let newNode = new Node(val)
    if(this.head === null){
      this.head = newNode
      return this
    }
    else{
      let current = this.head
      while(current.next !== null){
        current = current.next
      }
      current.next = newNode
      return this
    }
  }

  popHead(){
    let oldHead = this.head
    this.head = this.head.next

    return oldHead.val
  }

  popTail(){
    let current = this.head
    let tail = null
    while(current.next !== null){
      current = current.next
    }
    tail = current
    current = null
    return tail
  }

  print(){
    let current = this.head
    //while there is a current, keep printing
    while(current){
      console.log(current.val)
      current = current.next
    }
  }
}

//to chain it, you will have to return this
let list = new LinkedList()
list.push(5).push(10).push(15)
//list.popHead()
list.popTail()
list.print()



