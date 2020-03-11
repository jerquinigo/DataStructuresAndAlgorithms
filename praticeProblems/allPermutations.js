function myPerm(str){
    let results = []
    if(str.length === 1){
      results.push(str)
      return results
    }
  
    for(let i = 0; i < str.length; i++){
      let firstChar = str[i]
      let charsLeft = str.slice(0,i) + str.slice(i + 1)
      let innerPerm = myPerm(charsLeft)
        for(let j = 0; j < innerPerm.length; j++){
          results.push(firstChar + innerPerm[j])
        }
   
    }
     return results
  }
  
  myPerm("boat")

// all permutations
//   [ 'boat',
//   'bota',
//   'baot',
//   'bato',
//   'btoa',
//   'btao',
//   'obat',
//   'obta',
//   'oabt',
//   'oatb',
//   'otba',
//   'otab',
//   'abot',
//   'abto',
//   'aobt',
//   'aotb',
//   'atbo',
//   'atob',
//   'tboa',
//   'tbao',
//   'toba',
//   'toab',
//   'tabo',
//   'taob' ]