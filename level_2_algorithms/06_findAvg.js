function findAvg(arr){
  var sum = 0
  for(var i =0; i<arr.length; i++){
    sum+=arr[i]
  };
  var avg = sum / arr.length;
  console.log(avg)
};

findAvg([1,3,5,7,20])
