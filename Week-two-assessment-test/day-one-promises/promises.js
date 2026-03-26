// let data = 1;
// console.log(data);

// data = 2;  
// setTimeout(() => { //function ko delay ke liye schedulr karta hai immediately execute nahi karta hai
//   console.log("timer data", data);
// }, 2000); //ye 2 sec mai output show hoga

// data = 3;
// console.log(data);

// // to iska output 1, 3 and "timer data 3"= js usko current value check karta hai jab ki current value 3 hai isilye output timer
// // data 3 aaya hai

// ---------------------------------------------------------------------------------------------

// let data = new Promise((resolve, reject) => { //promise created lakin pending mai hai
//   setTimeout(() => {
//     resolve("Code has been executed"); //ye pending state mai hai ye 2 sec mai chalega code
//   }, 2000);
// });

// console.log(data); //yaha pai sirf promise to resolve kiye hai, promise sirf return kiye hai

// data.then((item) => { //promise resolve hone ka w8 karta hai //.then actual result deta hai
//   console.log(item); //output code has been executed
// });

// console.log("Hello"); // ye synchronous data hai to direct execute hoga


// // after 2 sec promise reslove hua then run hoga item


// --------------------------------------------------------------------------------------

// let newdata = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong"); 
//   }, 2000);
// });


// newdata.then((item) => { 
//   console.log(item); 
// }).catch((err)=>{
//  console.log("Catch block, ",err)
// })


// --------------------------------------------------------------------------------------------------
// assignment answer
function fetchUsers() {
  return new Promise((resolve, reject) => {

    console.log("Fetching users...");

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()) // convert to JSON //agar data success(resolve) ho gaya to .then ka use karta hai
        .then((data) => resolve(data)) // success
        .catch((err) => reject(err)); // error
    }, 2000); // 2 sec delay

  });
}

fetchUsers()
  .then((users) => {
    console.log("Users Data:", users);
  })
  .catch((error) => {
    console.log("Error:", error);
  });