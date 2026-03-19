//Display student information

const students = [
  { name: "Shubham", age: 20, city: "Pune" },
  { name: "Saurabh", age: 19, city: "Mumbai" }
];

const result = students.map(({ name, age, city }) => {
  return `Name: ${name}, Age: ${age}, City: ${city}`;
});

console.log(result);