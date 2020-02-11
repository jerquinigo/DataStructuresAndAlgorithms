const binSearch = (nums, target) => {
    let start = 0
    let end = nums.length - 1
  
    if(nums[0] === target) return 0
    while(start <= end){
      let midIdx = Math.floor((start + end) / 2)
      
      if(target === nums[midIdx]){
        return midIdx
        //return console.log(results)
        
      }
      if(target > nums[midIdx]){
        start = midIdx + 1
      }
      if(target < nums[midIdx]){
       
        end = midIdx - 1
      }
   
    }
    return -1
  
  };

  console.log(binSearch([3,6,7,8,9,10,11], 10))