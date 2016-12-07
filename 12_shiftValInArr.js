function shiftValInArr(arr){
  for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i+1];
    if(arr[i] == undefined){
      arr[i] = 0;
    }
  };
  console.log(arr)
};

shiftValInArr([1,5,10,7,-2])
