// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array.

function removingNegs(arr){
  var count = 0
  for(var runner1 = 0; runner1<arr.length; runner1++){
    if(arr[runner1]<0){
      for(var runner2 = runner1 + 1; runner2<arr.length; runner2++){
        if(arr[runner2] >=0){
          var temp = arr[runner1];
          arr[runner1] = arr[runner2];
          arr[runner2] = temp
          count +=1
          break
        };
      };
    };
  };
  while(count>=1){
    arr.pop()
    count -=1
  };
  console.log(arr);
};

removingNegs([0,-1,2,-3,4,-5,6])
