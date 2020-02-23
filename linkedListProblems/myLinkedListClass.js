class Node{
    constructor(val){
      this.val = val;
      this.next = null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
  
    push(val){
      let newNode = new Node(val)
      if(this.head === null){
        this.head = newNode
        this.tail = newNode
      }
      else{
        let current = this.head
        while(current.next !== null){
          current = current.next
        }
        current.next = newNode
      }
      this.length++
    }
  
    removeTarget(target){
      if(this.head === null){
        return undefined
      }
      let current = this.head
      let currTemp = this.head
      while(current !== null){
        
        if(current.val === target){
          currTemp.next = current.next
          this.length--
          return console.log(current.val, "the value")
  
          
        }
        currTemp = current
        current = current.next
      }
      return console.log("not found")
    }
  
    print(){
      let current = this.head
      while(current !== null){
        console.log(current.val)
        current = current.next
  
      }
    }
  }
  
  
  let list = new LinkedList()
  list.push(5)
  list.push(10)
  list.push(15)
  list.push(20)
  list.removeTarget(15)
  list.print()
  //this will print out 5 => 10 => 20. It will remove 15
  