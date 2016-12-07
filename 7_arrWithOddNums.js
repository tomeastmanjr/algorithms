function arrWithOddNums(){
  var arr = []
  for(var i = 1; i<=255; i++){
    if(i%2!=0){
      arr[arr.length] = i;
    }
  }
  console.log(arr)
};

arrWithOddNums()
