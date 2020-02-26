class Node{
    constructor(data){
      this.head = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  
  class BinarySearchTree{
    constructor(){
      this.root = null
    }
  
    insert(val){
      let newNode = new Node(val)
      if(this.root === null){
        this.root = newNode
      }else{
        let current = this.root
        while(current !== null){
          if(val < current.head){
            if(current.left !== null){
              current.left = newNode
              break
            }
            else{
              current.left = newNode
            }
          }
          else{
            if(current.right !== null){
              current.right = newNode
              break
            }
            else{
              current.right = newNode
            }
          }
        }
      }
  
    }
  }
  
  
  let bst = new BinarySearchTree()
  bst.insert(5)
  bst.insert(3)
  bst.insert(100)
  bst.insert(200)
  console.log(bst)