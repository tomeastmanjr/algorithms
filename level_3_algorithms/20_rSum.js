function rSum(n){
  if(n === 1){
    return 1;
  }else{
    return rSum(n-1) + n;
  };
};

console.log(`This is the result of rSum(4) ${rSum(4)}`)
