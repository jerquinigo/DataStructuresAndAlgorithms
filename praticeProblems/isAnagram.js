const isAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
      return false
    }
    let letters = {}
    for(let i = 0; i < str1.length; i++){
      let keyedInLetters = letters[str1[i]] 
      if(!keyedInLetters){
        
        keyedInLetters = 1
      }
      else{
        keyedInLetters = keyedInLetters + 1
      }
    }
  
    //shortcut for same loop on top
    // for (let letters of str1){
    //   if(letters[letter]){
    //     letters[letter]++ 
    //   }
    //   else{
    //     letters[letter] = letters[letter] + 1
    //   }
    // }
    //listen
    //{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
    //silent
    //letters[str2[i]] = letters[str2[i]] - 1 
    for(let i = 0; i < str2.length; i++){
      if(letters[str2[i]]){
        letters[str2[i]] = letters[str2[i]] - 1
      }
      else{
        return false
      }
    }
    return true
  
    
  }
  
  
  console.log(isAnagram("listenn", "silent"))