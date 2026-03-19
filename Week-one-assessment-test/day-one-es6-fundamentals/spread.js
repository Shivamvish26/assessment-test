// Use spread operator to add new students

const studentlist = [
    {
        id:1,
        name:"Shivam",
        age:20
    },
    {
        id:2,
        name:"Sanjay",
        age:20
    },
]

// const newdatalist=[
//       {
//         id:3,
//         name:"Saurabh",
//         age:20
//     },
//     {
//         id:4,
//         name:"Ashish",
//         age:20
//     },
// ]

// single data add karna hai muza
const singledata = {id:3,name:"Saurabh",age:20}

// adding new data list
// const updatelist = [...studentlist,...newdatalist]

// single data list add
const updatelist = [...studentlist,singledata]

console.log(updatelist)