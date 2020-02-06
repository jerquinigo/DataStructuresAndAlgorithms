let sumOfDigits = (num) => {
    let results = 0;
    while(num){
      let rem = num % 10
      num = Math.floor(num/10) 
      results += rem
  }
  return results
  }
  sumOfDigits(234)


  // Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


// count8(818) → 2
// count8(8818) → 4

//iterative approach

let countEight = (num) => {
    let count = 0
    while(num){
      let remainder = num % 10
      num = Math.floor(num / 10)
      let remainder2 = num % 10
      if(remainder === 8 && remainder2 === 8){
        count = count + 2
      }
      else if(remainder === 8){
        count = count + 1
      }
    }
    console.log(count)
  }
  
  countEight(8818)

//recursive approach
  let countEightRec = (num) => {
    if(num === 0) return num
    let count = 0
    let remainder = num % 10
    num = Math.floor(num/10)
    let remainder2 = num % 10
    if(remainder === 8 && remainder2 === 8){
      count = count + 2
    }
    else if(remainder === 8){
      count = count + 1
    }
    count += countEightRec(num)
    return count
  }
  
  countEightRec(8818)