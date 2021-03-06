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



  // Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".


// stringClean("yyzzza") → "yza"
// stringClean("abbbcdd") → "abcd"
// stringClean("Hello") → "Helo"

// iterative approach
let cleanString = (str) => {
    let idx = 0
    let output =""
    while(idx <= str.length){
      if(str[idx] !== str[idx + 1]){
        output = output + str[idx]
      }
      idx++
    }
  return output
  }
  
  
  cleanString("yyzzza")
  
  // recursive approach
  const cleanStringRec = (str) => {
    if(str.length === 0) return ""
    let output = ""
  
    if(str[0] !== str[1]){
      output = output + str[0]
    }
    return output + cleanStringRec(str.slice(1))
  }
  
  cleanStringRec("yyzzza")
  

  // Given an array of ints, compute recursively if the array contains somewhere a value followed in the array by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.


// array220([1, 2, 20], 0) → true
// array220([3, 30], 0) → true
// array220([3], 0) → false



const multTenCheck = (arr, idx) => {

    let ten = 10
    while(idx < arr.length){
      if(arr[idx] * ten === arr[idx + 1]){
        return true
      }
      idx++
    }
    return false
  }
  
  multTenCheck([1,2,20], 0)
  
  
  const multTenCheckRec = (arr, idx) => {
    if(idx <= arr.length) return false
      if(arr[idx] * 10 === arr[idx + 1]){
        return true
      }
  
    return multTenCheckRec(arr, idx + 1)
  }
  
  multTenCheckRec([1,2,20],0)




// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.


// changeXY("codex") → "codey"
// changeXY("xxhixx") → "yyhiyy"
// changeXY("xhixhix") → "yhiyhiy"

const changeChar = (str) => {
  if(!str) return ""
  let output = ""
  if(str[0].toLowerCase() === 'x'){
    str[0] = 'y'
  }
  else if(str[0].toLowerCase() === 'x'){
    str[0] = 'x'
  }

  return output + changeChar(str.slice(1))
}


changeChar("codex")


// Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.


// nestParen("(())") → true
// nestParen("((()))") → true
// nestParen("(((x))") → false

const checkNest = (str) => {
  if(!str) return true
  let backIdx = str.length -1 
  if(str[0] + str[backIdx] === "()"){
    return checkNest(str.slice(1,-1))
  }
  else{
    return false
  }

}

checkNest("(())")


const changePi = (str) => {
  if(!str) return ""
  if(str[0]+ str[0+1] === "pi"){
    return "3.14" + changePi(str.slice(2))
  }
  else{
    return str[0] + changePi(str.slice(1))
  }
}

changePi("xpix")


// We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.


// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3

const triCheck = (num) => {
  if(num === 0) return num
  let count = 0
  if(num !== 0){
    return num + triCheck(--num)
  }
}

triCheck(2)



// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).


// bunnyEars2(0) → 0
// bunnyEars2(1) → 2
// bunnyEars2(2) → 5

const countEars = (num) => {
  if(num === 0) return num
  let result = 0
  if(num % 2 === 0){
    
    result = result + 3
  }
  else if(num % 3){
    result = result + 2
  }
  return result + countEars(--num)
}

countEars(2)


// Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.


// strCount("catcowcat", "cat") → 2
// strCount("catcowcat", "cow") → 1
// strCount("catcowcat", "dog") → 0




const strCount = (str, sub) => {
  if(!str) return 0;
  let [start, end] = [0, sub.length];
  if(str.slice(start,end) === sub)return 1 + strCount(str.slice(end),sub)
  else return strCount(str.slice(++start),sub)
}

strCount("catcowcat", "cat")

// print out each element in order
//expected output = 1,2,3,4,5,6,7,8,9


let mtx = [[1,2,3],[4,5,6],[7,8,9]]

const printMtx = (mtx) => {
    if(mtx.length === 0) return 
    // console.log(mtx[0][0], "no slice")
    // mtx[0] = mtx[0].slice(1)
    // console.log(mtx[0][0], "first slice")
    // mtx[0] = mtx[0].slice(1)
    // console.log(mtx[0][0], "second slice")
    // console.log(mtx[0].length, "length of the second slice")
    // mtx[0] = mtx[0].slice(1)
    // console.log(mtx[0][0], "third slice")

    if(mtx[0].length === 1){
        console.log(mtx[0][0])
        return printMtx(mtx.slice(1))
    }
    else{
        console.log(mtx[0][0])
        mtx[0] = mtx[0].slice(1)
        return printMtx(mtx)
    }
    
}

printMtx(mtx)
