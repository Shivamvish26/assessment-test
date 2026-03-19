//Use destructuring to extract properties

const users = ["anil", "shubham", "sanjay", "sourabh"];
// indexing value 0, 1, 2 and many more
// console.log(users[0]);

const [x1, x2, ...x3] = users;
// const [a,...b,c]=users it will show error because the rest element is always used at last

// console.log(x3);


// destructing with the object

const Userobj = {
  name: "Shubham Vishwakrma",
  age: 20,
  city: "Pune",
};

const { age,...other } = Userobj;
// console.log(other);


// multiple array diaplay using map
const userlist=[
    {
        name:"Shbham",
        age:20,
        city:"Pune"
    },
    {
        name:"Saurabh",
        age:19,
        city:"Pune"
    }
]

const result = userlist.map(({name,...other})=>other)
console.log(result)