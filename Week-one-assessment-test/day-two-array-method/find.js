// Use find() to search for a product

const products = [
  { id: 1, name: "Sugar", price: 200, category: "Grocery" },
  { id: 2, name: "Soap", price: 40, category: "Daily" },
  { id: 3, name: "Rice", price: 500, category: "Grocery" },
  { id: 4, name: "Shampoo", price: 150, category: "Daily" },
];

const result = products.find((product)=>product.id ===2).name;
console.log(result)
