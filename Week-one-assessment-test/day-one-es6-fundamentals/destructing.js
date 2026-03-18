//Use destructuring to extract properties
const users = [
 "anil","shubham","sanjay","sourabh"
];
// indexing value 0, 1, 2 and many more
// console.log(users[0]); 

const [x1,x2,...x3]=users
// const [a,...b,c]=users it will show error because the rest element is always used at last
console.log(x3);
