//Implement increment and getCounterValue functions

// function createCounter() {
//   let count = 0; // private variable

//   return {
//     increment: function () {
//       count++; // increase value
//       return count; // return updated value
//     },

//     getCounterValue: function () {
//       return count; //ye sirf value ko read karta haiand change nahi karta hai vlaue ko
//     },
//   };
// }

// const counter = createCounter();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCounterValue()); // 2

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function getCounterValue() {
    return count;
  }

  return {
    increment,
    getCounterValue,
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCounterValue()); // 2
