// Use filter() to show products above a certain price

const products = [
  { id: 1, name: "Sugar", price: 200, category: "Grocery" },
  { id: 2, name: "Soap", price: 40, category: "Daily" },
  { id: 3, name: "Rice", price: 500, category: "Grocery" },
  { id: 4, name: "Shampoo", price: 150, category: "Daily" },
];

const getproductcategory=()=>{
    return products.filter(({category})=>category)
}

console.log(getproductcategory())