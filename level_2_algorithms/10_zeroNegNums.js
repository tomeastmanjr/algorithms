function zeroNegNums(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
      arr[i]=0;
    };
  };
  console.log(arr)
};

zeroNegNums([1,5,10,-2])
