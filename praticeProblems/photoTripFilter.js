  //John likes to travel. He has visited a lot of cities over  many years. Whenever he visits a city, he takes a few photos and saves them on his computer. Each photo has a name with an extension ("jpg , "png or "jpeg") and there is a record of the name of the city where the photo was taken and the time and date the photo; for example: "photo. jpg, Warsaw, 2013—09—05 14 : 08: 15". John notices that his way of filing photos on his computer has become a mess. He wants to reorganize the photos. First he decides to group the photos by city, then, within each such group, sort the photos by the time they were taken and finally assign consecutive natural numbers to the photos, starting from 1 . Afterwards he intends to rename all the photos. The new name of each photo should begin with the name of the city followed by the number already assigned to that photo. The number of every photo in each group should have the same length (equal to the length of the largest number in this group); thus, John needs to add some leading zeros to the numbers. The new name of the photo should end with the extension, which should remain the same. Your task is to help John by finding the new name of each photo. Each of John's photos has the format: “<<photoname>>.<<extension>>, <<city_name>>, yyyy—mm—dd hh:n-m: ss , where "<<photoname>>", "<<extension>>" and "<<city_name>>" consist only of letters of the English alphabet and supply the name of the photo, the file name extension and the city name, respectively. Write a function: function solution (S) { // your code } that, given a string representing the list of M photos, returns the string representing the list of the new names of all photos (the order of photos should stay the same). For example, given a string: photo. jpg, Warsaw, 2013-09-05 14:08:15 john.png, London, 2015-06-20 15:13:22 my-Friends.png, Warsaw, 2013-09-05 14:07:13 Eiffel.jpg, Paris, 2015-07-23 08:03:02 pisatower.jpg, Paris, 2015-07-22 23:59:59 BOB.ipg, London, 2015-08-05 00:02:03 notredame.png, Paris, 2015-09-01 12:00:00 me.jpg, Warsaw, 2013-09-06 15:40: 22 a.png, Warsaw, 2016-02-13 13:33:50 b.jpg, Warsaw, 2016-01-02 15:12:22 c.jpg, Warsaw, 2016-01-02 14:34:30 d.jpg, Warsaw, 2016-01-02 15:15:01 e.png, Warsaw, 2016-01-02 09:49:09 f.png, Warsaw, 2016-01-02 10:5:32 g.jpg, Warsaw, 2016-02-29 22:13:11 your function should return: Warsaw02.jpg London1.png Warsaw01.png Paris2.jpg Paris1.jpg London2.jpg Paris3.jpg Warsaw03.jpg Warsaw09.jpg Warsaw07.jpg Warsaw06.jpg Warsaw08.jpg Warsaw04.jpg Warsaw05.jpg Warsaw10.jpg as there are ten photos taken in Warsaw (numbered from 01 to 10), two photos in London (numbered from 1 to 2) and three photos in as there are ten photos taken in Warsaw (numbered from 01 to 10), two photos in London (numbered from 1 to 2) and three photos in Paris (numbered from 1 to 3). The new names of the photos are returned in the same order as in the given string. Assume that: • M is an integer within the range [1 .. 100]; • Each year is an integer within the range [2000..2020]; • Each line of the input string is of the format <<photoname>>.<<extension>> , yyyy-mm-dd hh:n-m:ss" and lines are separated with newline characters; • Each photo name (without extension}) and city name consists only of at least 1 and at most 20 letters from the English alphabet; • Each name of the city starts with a capital letter and is followed by lower case letters; • No two photos share the same date and time; • Each extension is "jpg", “png" or “jpeg”


  let photo = 'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11'
  const photoFilter = (str) => {
    let photoArr = str.split("\n")
    let photoObj = {}
    for(let i = 0; i < photoArr.length; i++){
      let [data,place,date,time] = photoArr[i].split(" ")
      data = data.slice(data.length -4, -1)
      place = place.slice(0,-1)
      if(!photoObj[place]){
        photoObj[place] = []
        photoObj[place].push({data,place,date,time})
        
      }
      else{
        photoObj[place].push({data,place,date,time})
        
      }
    }
    for(let key in photoObj){
      photoObj[key].sort((a,b) => {
        a = new Date(a.date + " " + a.time)
        b = new Date(b.date + " " + b.time)
        return a - b
      })
    }
    for(let key in photoObj){
      for(let i in photoObj[key]){
        i = +i
        if(photoObj[key].length > 9){
          if((i + 1) < 10){
            photoObj[key][i].place = `${photoObj[key][i].place}0${i + 1}`
            
          }
          else{
            photoObj[key][i].place = `${photoObj[key][i].place}${i + 1}`
            
          }
        }
        else{
          photoObj[key][i].place = `${photoObj[key][i].place}${i + 1}`
          
        }
      }
    }
    let newArr = []
    for(let key in photoObj){
      newArr.push(...photoObj[key])
      
    }
    let originalDateArr = []
    for(let i = 0; i < photoArr.length; i++){
      let [data,place,date,time] = photoArr[i].split(" ")
      originalDateArr.push(date + " " + time)
      
    }
    for(let i = 0; i < newArr.length; i++){
        let idx = originalDateArr.indexOf(newArr[i].date + " " + newArr[i].time)
        photoArr[idx] = newArr[i]
        
    }
    
    let results = photoArr.map(photo => {
      return `${photo.place}.${photo.data}`
    })
    console.log(results.join(" \n"))
  }
  photoFilter(photo)