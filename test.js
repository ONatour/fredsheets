function myFunction() {
  let a = [1,2,3,4,5,8]

  console.log(a.reduce((acc, e) => acc + e, 0));
  for(let i = 0; i < 10000; i++){
    console.log(i)
  }

  
}

// function factorial(n){
//   if(n <= 1){
//     return n;
//   }
//   else{
//     return factorial(n-1) * n;
//   }
// }






















