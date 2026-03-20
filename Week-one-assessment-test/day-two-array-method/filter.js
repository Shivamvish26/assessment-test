// Use filter() to show products above a certain price

const products = [
  { id: 1, name: "Sugar", price: 200, category: "Grocery" },
  { id: 2, name: "Soap", price: 40, category: "Daily" },
  { id: 3, name: "Rice", price: 500, category: "Grocery" },
  { id: 4, name: "Shampoo", price: 150, category: "Daily" },
];

// filtering the price
const result = products.filter((products)=>products.price < 100)
console.log(result)

// flitering the cateroty
// const groceryitems = products.filter((products)=>products.category === "Grocery")
// console.log(groceryitems)


// filtering the name
// const dataname = products.filter((products)=>products.name === "Rice")
// console.log(dataname)