// setting up quicksort iteratively


const swap = (arr,leftIdx,rightIdx) => {
    let temp = arr[leftIdx]
    arr[leftIdx] = arr[rightIdx]
    arr[rightIdx] = temp
  }
  
  
  const partition = (arr,left,right) => {
    let pivot = arr[Math.floor((right + left)/2)]
    let i = left
    let j = right
  
    while(i <= j){
      while(arr[i] < pivot){
        i++
      }
      while(arr[j] > pivot){
        j--
      }
      if(i<=j){
        swap(arr,i,j)
        i++
        j--
      }
    }
    return i
  }
  
  
  
  const quickSort = (arr,left,right) => {
    let idx;
    if(arr.length > 1){
      idx = partition(arr, left, right)
        if(left < idx - 1){
          quickSort(arr,left, idx - 1)
        }
        if(idx < right){
          quickSort(arr,idx,right)
        }
    }
    return arr
  }
  
  
  let arr = [99,6,7,4,2,-1,77,88,11]
  
  
  let quickResult = quickSort(arr,0,arr.length -1 )
  console.log(quickResult)
  //results [-1,2,4,6,7,11,77,88,99]
  //Quick sort runs with the Time Complexity of O(nlogn)