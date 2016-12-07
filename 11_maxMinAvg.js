function maxMinAvg(arr){
  if(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0
    for(var i =0; i<arr.length; i++){
      if(arr[i]>max){
        max = arr[i];
      };
      if(arr[i]<min){
        min = arr[i];
      };
      sum += arr[i];
    };
    var avg = sum/arr.length
    console.log(`This is max ${max}, min ${min} and avg ${avg}`)
  }else{
    console.log("please pass in an array")
  }
}

maxMinAvg([1,5,10,-2])
