function printSum(){
  var sum = 0;
  for(var i = 1; i<=5000; i++){
    if(i%2!=0){
      sum += i
    };
  };
  console.log(sum)
}

printSum()
