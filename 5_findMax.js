function findMax(arr){
  if(arr && arr.length){
    var max=arr[0]
    for(var i=0; i<arr.length; i++){
      if(arr[i]>max){
        max=arr[i];
      };
    };
  }
  else{
    max="please pass in an array"
  };
  console.log(`this is max ${max}`)
};

findMax([-3,3,5,7])
