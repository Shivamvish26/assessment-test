// Use reduce() to calculate total price

// const number = [1, -1, 2, 3];

// // a = 0 & c = 1  => a = 1
// // a = 1 & c = -1  => a = 0
// // a = 0 & c = 2  => a = 2
// // a = 2 & c = 3  => a = 5
// final answer 5
// const totalvalue = number.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 0);

// console.log(totalvalue);



const products = [
  { id: 1, name: "Sugar", price: 200, category: "Grocery" },
  { id: 2, name: "Soap", price: 40, category: "Daily" },
  { id: 3, name: "Rice", price: 500, category: "Grocery" },
  { id: 4, name: "Shampoo", price: 150, category: "Daily" },
];

// a = 0 , p = 200 => a=200
// a = 200 , p = 40 => a=240
// a = 240 , p = 500 => a=740
// a = 740 , p = 150 => a=890
// final answer 890
const totalvaue = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalvaue);
