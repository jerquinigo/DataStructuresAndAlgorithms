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




  let list2 = new LinkedList()
list2.push(5)
list2.push(10)
list2.push(5)


const isPalendrome = (list) => {
  
  let valueArr = []
  if(list === null) return false
  let current = list.head
  while(current !== null){
    valueArr.push(current.val)
    current = current.next
  }
  let length = valueArr.length - 1
  current = list.head
  while(current !== null){
    if(valueArr[length] === current.val){
      valueArr.pop()
      length = length - 1
      console.log(valueArr)
    }
    else{
      break
    }
    current = current.next
  }
  if(valueArr.length === 0){
    return true
  }
  else{
    return false
  }

}

console.log(isPalendrome(list2))