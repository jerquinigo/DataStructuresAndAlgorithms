let arr = [100,4,6,3,22,300,5,78,1]

let swapped;
const bubbleSort = (arr) => {
  swapped = false
  end = arr.length - 1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1]){
      swapped = true
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
  end--
}

do{
  bubbleSort(arr)
}while(swapped === true)

console.log(arr)
//[1,3,4,5,6,22,78,100,300]