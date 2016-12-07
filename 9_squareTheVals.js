function squareTheVals(arr){
  var newArr = []
  for(var i=0; i<arr.length; i++){
    newArr[i] = arr[i]*arr[i]
  };
  console.log(newArr);
};

squareTheVals([1,5,10,-2])
