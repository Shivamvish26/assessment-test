// Build a Counter Application using closures

function createcounter() { 
  let count = 0; //ye privat hai count ha isko access nahi kar sakat hai
  return function () {   
    count++;
    return count;
  };
}

const counter = createcounter(); // ye private nahi hai

console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3


// count initial value 0 hai abhi
// count = 0    
// count ++ 1
// count = 1
// count 1+1
// count 2
// count 2+1
// count 3
// 1 2 3 output