// Build a Counter Application using closures

function createcounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createcounter();

console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
